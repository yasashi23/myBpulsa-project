from fastapi import FastAPI, Request,Response, Header
from fastapi.websockets import WebSocket
from pydantic import BaseModel
from dataKumpulan import dataPrefix,dataPulsa,OTPgen,verify,getData,generateOtp,check
from fastapi.middleware.cors import CORSMiddleware
import pymongo
import datetime
from pymongo import MongoClient
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
import json
import jwt
import uvicorn
import math
import asyncio

import socketio

# sio = socketio.AsyncClient()


# @sio.event
# async def connect():
#     print('I\'m connected')

# @sio.event
# async def testing(data):
#     print('test Berhasil', data)

# @sio.on
# async def testing(data):
#     print('test berhasil',data)

# @sio.event
# async def disconnect():
#     print('I\'m disconnected')



options = Options()
options.add_experimental_option("debuggerAddress","localhost:9222")

servicePc = ChromeService(executable_path='/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/backend/seleniumnya/chrome/chromedriver') 
serviceLap = ChromeService(executable_path='/home/yasashi/Documents/ngoding/project/dummy-pulsa-web/backend-py/backend/seleniumnya/popLapChrome/chromedriver') 


try:
    driver = webdriver.Chrome(service=serviceLap,options=options)

except:
    driver = webdriver.Chrome(service=servicePc,options=options)


client = MongoClient("mongodb://admin:root@192.168.100.202/")

db = client.test
pp = db.latihanData.find()
otpDb = db.otp
dbDataPelanggan = db.dataPelanggan



app = FastAPI()
ACCESS_SECRET_KEY = "briliantkuh54"
ACCESS_REFRESH_KEY= "BriliantRefreshkuh56"
ALGORITHM = "HS256" 
ACCESS_TOKEN_EXPIRE_MINUTES = 30


origins = [
    "http://localhost:3000",
    "http://192.168.100.17:3000",
    "http://192.168.100.22:3000",
    "http://192.168.100.24:3000",
    "http://192.168.100.24:3001",
    "http://192.168.100.7:3000",
    "http://192.168.100.7:3001",
    "http://localhost:3001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/dataPulsa")
def read_root(request:Request,authorization: str = Header(None)):
    print(authorization)
    host = request.client
    print(host)
    print("aman")

    return dataPulsa()

@app.get("/dataPrefix")
def read_root():
    return dataPrefix()

def settingDetik(n):
    sec = 24*60*(n*60)
    return n

@app.post("/send-otp")
async def terima(item:generateOtp,request:Request):
    jam = datetime.datetime.now() + datetime.timedelta(minutes=1) 
    
    otpnya = OTPgen()
    otp = {
        "nomor":item.nomorWa,
        "otp":otpnya,
        "expire":jam
    }

    otpDb.insert_one(otp)
    for x in otpDb.find():
        print(x)

    return{"msg":"berhasil"}


def create_jwt_token(data: dict,apanih):
    to_encode = data.copy()
    print(to_encode,data)

    # Akses Token
    if apanih == "access":
        expire = datetime.datetime.now() + datetime.timedelta(seconds=15)
        to_encode.update({"exp": expire})
        accessToken = jwt.encode(to_encode, ACCESS_SECRET_KEY, algorithm=ALGORITHM)
        return accessToken
    

    # refreshToken
    else:
        expireRefresh = datetime.datetime.now() + datetime.timedelta(seconds=15)
        to_encode.update({"exp": expireRefresh})
        accessRefreshToken = jwt.encode(to_encode, ACCESS_REFRESH_KEY, algorithm=ALGORITHM)
        return accessRefreshToken


def delete(data):
    otpDb.delete_one(data)


def berhasil():
    print("AHAY DEDEH BERHASIL BEH")

@app.post("/verify-otp")
async def terima(item:verify,res:Response):

    # await sio.connect(url='http://192.168.100.7:8000/',socketio_path='sockets')
    otpCheck = otpDb.find_one({"nomor":item.nomorWa,"otp":item.otp})

    dataPelanggan = {
        "nama":item.nama,
        "nomor":item.nomor,
        "nomorWa":item.nomorWa,
        "kartu":item.kartu,
        "pulsa":item.pulsa,
        "harga":item.harga,
        "status":item.status
    }

    toToken = {
        "nama":item.nama,
        "nomor":item.nomor,
        "nomorWa":item.nomorWa,
        "pulsa":item.pulsa,
    }

    if otpCheck:
        # print("otpCheck ===>>",otpCheck["expire"] > datetime.datetime.now())
        if otpCheck["expire"] > datetime.datetime.now():
            delete({'otp':item.otp})
            accessToken = create_jwt_token(toToken,"access")
            refreshToken = create_jwt_token(toToken,"refresh")
            dataPelanggan.update({"refresh_token":refreshToken})
            dbDataPelanggan.insert_one(dataPelanggan)
            hasil = dbDataPelanggan.find()
            hasilnya = []
            for x in hasil:
                newDat = x.pop("_id",None)
                hasilnya.append(x)
            replaceDotPrice= item.pulsa.replace(".","")

            noToStr = f"{math.floor(int(replaceDotPrice)/1000)}"
            hasil = "bi"+item.nomor[slice(2,len(item.nomor))].replace(" ","")+noToStr

            # print(token)
            res.set_cookie(key="refreshToken",value=refreshToken,httponly=True)
            # res.headers["http-only"] = True
            # res.headers["max-age"] = 24*60*60*1000  
            
            return{"message":"OTP terverifikasi","token":accessToken,"ket":hasil}
        else:
            delete({'otp':item.otp})
            print("TIDAK EXPIRE")
            # await sio.disconnect()
            return {"message":'verifikasi gagal'}
        
    else:
        # await sio.disconnect()
        return{"message":"OTP ggl"}
    # await sio.disconnect()

@app.post('/checkout/{ket}')
async def checkout(cek:check,ket:str):
    print(cek,ket)
    return "sip"






# print(datetime.datetime.now(),datetime.datetime.now()+ datetime.timedelta(seconds=20))

if __name__ == "__main__":
    uvicorn.run("server2:app", host='0.0.0.0' ,port=8001, log_level="info",reload=True)


