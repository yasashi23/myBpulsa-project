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
async def server6(data:VerifyOtpModels):
    print(data)
    return {"pesan":f"{data.nama} ini dari server6"}


if __name__ == "__main__":
    uvicorn.run("server8006:app", host='0.0.0.0',port=8006, log_level="info",reload=True)

