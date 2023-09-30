import os,sys
sys.path.append(os.path.abspath(os.path.join('..','..','apiGateway')))
from models import VerifyOtpModels
import uvicorn

import socket

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/')
async def server3(data:VerifyOtpModels):
    print(data)
    return {"pesan":f"{data.nama} ini dari 8004"}

@app.post('/otp')
async def otp():
    return "ok"


if __name__ == "__main__":
    uvicorn.run("server8004:app", host='0.0.0.0',port=8004, log_level="info",reload=True)

