import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import SendOtpModels,VerifyOtpModels,CheckoutLinkModels
import requests

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://192.168.100.24",
    "http://192.168.100.7"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

link= 'http://127.0.0.1'

@app.get('/')
async def getSlash():  
    return requests.get(f"{link}:8002/").json()



@app.post('/send-otp')
async def sendOtp(data:SendOtpModels):
    newDat ={"nomorWa":data.nomorWa}

    return requests.post(f"{link}:8003/",json=newDat).json()


@app.post('/verify-otp')
async def verifyOtp(data:VerifyOtpModels):
    return requests.post(f"{link}:8004/",).json()


@app.post('/checkout/{link}')
async def checkout(link,token:CheckoutLinkModels):
    return {"pesan":"ini checkout page","link":link}

  

if __name__ == "__main__":
    uvicorn.run("gatewayServer:app", host='0.0.0.0',port=8000, log_level="info",reload=True)
