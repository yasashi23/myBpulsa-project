from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app = FastAPI()
origins = [
    "http://192.168.100.7:8000"    
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def test():
    print("masuk pa eko")
    return {"pesan":'ini dari 8002'}



if __name__ == "__main__":
    uvicorn.run("server8002:app", host='0.0.0.0',port=8002, log_level="info",reload=True)