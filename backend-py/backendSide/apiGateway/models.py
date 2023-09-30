from pydantic import BaseModel

class SendOtpModels(BaseModel):
    nomorWa:str

# kirimkan ke checkoutpage
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


# dari checkout ke verify
class CheckoutLinkModels(BaseModel):
    token:str

# dari checkout ke auth
class CheckoutToAuthModels(BaseModel):
    otp:str
    pulsa:str
    kartu:str
    nama:str
    nomor:str
    harga:str
    nomorWa:str
    status:str
    jam:str
    link:str

# dari auth ke checkout
class authToCheckoutModels(BaseModel):
    link:str
    pulsa:str
    nama:str
    nomor:str
    kartu:str
    harga:str
    token:str

#respon dari checkout ke vrify
class checkoutToVerify(BaseModel):
    link:str
    pulsa:str
    nama:str
    nomor:str
    kartu:str
    harga:str
    token:str   


#dari checkout ngirim ke Wa
class sendDataTowa(BaseModel):
    link:str
    pulsa:str
    nama:str
    nomor:str
    kartu:str
    harga:str 


