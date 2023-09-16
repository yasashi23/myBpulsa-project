from typing import Union
from fastapi import FastAPI, Request
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from fastapi.middleware.cors import CORSMiddleware
import pymongo
from pymongo import MongoClient
from pydantic import BaseModel
import random as r

import datetime



client = MongoClient("mongodb://admin:root@192.168.100.202/")

db = client.test
pp = db.latihanData.find()
otpDb = db.otp
dbDataPelanggan = db.dataPelanggan

# for x in pp:
#     # print(x)


app = FastAPI()




# print(hasil)
# if hasil:
#     table_name = "data"
#     first_row = hasil[0]
#     print(f"Table: {table_name}")
#     print(first_row)


# pc
jsonPrefixPc = '/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/dataMitra/nomorDiketahui.json'
jsonHargaPulsaPc = '/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/dataMitra/dataPulsa.json'

# laptop
jsonPrefixLap = '/home/yasashi/Documents/ngoding/project/dummy-pulsa-web/backend-py/dataMitra/nomorDiketahui.json'
jsonHargaPulsaLap = '/home/yasashi/Documents/ngoding/project/dummy-pulsa-web/backend-py/dataMitra/dataPulsa.json'

try:
    with open(jsonPrefixLap,'r') as file:
        dataPrefix=json.load(file)

    with open(jsonHargaPulsaLap,'r') as file:
        dataPulsa=json.load(file)
except:
    with open(jsonPrefixPc,'r') as file:
        dataPrefix=json.load(file)

    with open(jsonHargaPulsaPc,'r') as file:
        dataPulsa=json.load(file)

options = Options()
options.add_experimental_option("debuggerAddress","localhost:9222")

servicePc = ChromeService(executable_path='/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/backend/seleniumnya/chrome/chromedriver') 
serviceLap = ChromeService(executable_path='/home/yasashi/Documents/ngoding/project/dummy-pulsa-web/backend-py/backend/seleniumnya/popLapChrome/chromedriver') 

origins = [
    "http://localhost:3000",
    "http://192.168.100.17:3000",
    "http://192.168.100.22:3000",
    "http://192.168.100.24:3000",
    "http://192.168.100.7:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


try:
    driver = webdriver.Chrome(service=serviceLap,options=options)

except:
    driver = webdriver.Chrome(service=servicePc,options=options)


def OTPgen():
    otp=""
    for i in range(4):
        otp+= str(r.randint(1,9))
    return otp
    

# print("udin")

@app.get("/dataPulsa")
def read_root():
    return dataPulsa

@app.get("/dataPrefix")
def read_root():
    return dataPrefix


class generateOtp(BaseModel):
    nomorWa:str


class verify(BaseModel):
    otp:str
    pulsa:str
    kartu:str
    nama:str
    nomor:str
    harga:str
    nomorWa:str
    status:str
    jam:str

class getData(BaseModel):
    nama:str
    harga:str
    nomor:str
    nomorWa:str
    pulsa:str
    kartu:str
    jam:str
    status:str

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




def delete(data):
    otpDb.delete_one(data)




@app.post("/verify-otp")
async def terima(item:verify):

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

    if otpCheck:
        print("otpCheck ===>>",otpCheck["expire"] > datetime.datetime.now())

        if otpCheck["expire"] > datetime.datetime.now():
            delete({'otp':item.otp})
            dbDataPelanggan.insert_one(dataPelanggan)
            return{"message":"OTP terverifikasi"}
        else:
            delete({'otp':item.otp})
            print("TIDAK EXPIRE")
            return {"message":'verifikasi gagal'}
        
    else:
        return{"message":"OTP ggl"}
    

@app.post("/dat")
async def terima(data:getData):

    print(data)

    return{"message":"terimakasih"}




