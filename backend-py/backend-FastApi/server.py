from typing import Union
from fastapi import FastAPI
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()





# pc
jsonPrefixPc = '/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/dataMitra/nomorDiketahui.json'
jsonHargaPulsaPc = '/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/dataMitra/dataPulsa.json'

# laptop
jsonPrefixLap = '/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/dataMitra/nomorDiketahui.json'
jsonHargaPulsaLap = '/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/dataMitra/dataPulsa.json'

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
serviceLap = ChromeService(executable_path='/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/backend/seleniumnya/popLapChrome/chromedriver') 

origins = [
    "http://localhost:3000",
    "http://192.168.100.17:3000",
    "http://192.168.100.22:3000",
    "http://192.168.100.24:3000",
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



@app.get("/dataPulsa")
def read_root():
    return dataPulsa

@app.get("/dataPrefix")
def read_root():
    return dataPrefix


