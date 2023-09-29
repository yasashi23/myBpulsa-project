from pydantic import BaseModel

class SendOtpModels(BaseModel):
    nomorWa:str

class VerifyOtpModels(BaseModel):
    otp:str
    pulsa:str
    kartu:str
    nama:str
    nomor:str
    harga:str
    nomorWa:str
    status:str
    jam:str

class CheckoutLinkModels(BaseModel):
    token:str


