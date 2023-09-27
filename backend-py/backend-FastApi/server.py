from typing import Union
from fastapi import FastAPI,WebSocket
from fastapi.middleware.cors import CORSMiddleware
import json
from pydantic import BaseModel
import uvicorn

import datetime

from liveUpdate import sio_app



app = FastAPI()
app.mount("/",app=sio_app)

origins = [
    "http://localhost:3000",
    "http://192.168.100.17:3000",
    "http://192.168.100.22:3000",
    "http://192.168.100.24:3000",
    "http://192.168.100.24:3001",
    "http://192.168.100.7:3000",
    "http://192.168.100.7:3001",
    "http://localhost:3001",
    "http://192.168.100.24:8001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def dapat():
    return "ok"

# @app.websocket("/ws")
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket.accept()
#     while True:
#         data = await websocket.receive_text()
#         await websocket.send_text(f"Message text was: {data}")

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0",port=8000, log_level="info",reload=True)







