import json
from pydantic import BaseModel
import random as r

# pc
jsonPrefixPc = '/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/dataMitra/nomorDiketahui.json'
jsonHargaPulsaPc = '/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/dataMitra/dataPulsa.json'

# laptop
jsonPrefixLap = '/home/yasashi/Documents/ngoding/project/dummy-pulsa-web/backend-py/dataMitra/nomorDiketahui.json'
jsonHargaPulsaLap = '/home/yasashi/Documents/ngoding/project/dummy-pulsa-web/backend-py/dataMitra/dataPulsa.json'



def dataPrefix():
    try:
        with open(jsonPrefixLap,'r') as file:
            dataPrefix=json.load(file)
            return dataPrefix
    except:
        with open(jsonPrefixPc,'r') as file:
            dataPrefix=json.load(file)
            return dataPrefix


def dataPulsa():
    try:
        with open(jsonHargaPulsaLap,'r') as file:
            dataPulsa=json.load(file)
            return dataPulsa
    except:
        with open(jsonHargaPulsaPc,'r') as file:
            dataPulsa=json.load(file)
            return dataPulsa



def OTPgen():
    otp=""
    for i in range(4):
        otp+= str(r.randint(1,9))
    return otp
    


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

class cobaDong(BaseModel):
    coba:str

class check(BaseModel):
    token:str