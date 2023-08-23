from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from seleniumnya.Selen import Selen
from seleniumnya.Selen import OTPsend
from selenium.common.exceptions import WebDriverException
from rest_framework.response import Response
import random as r
from django.utils.timezone import now
import json


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



from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService


options = Options()
options.add_experimental_option("debuggerAddress","localhost:9222")

servicePc = ChromeService(executable_path='/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/backend/seleniumnya/chrome/chromedriver') 
serviceLap = ChromeService(executable_path='/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/backend/seleniumnya/popLapChrome/chromedriver') 



try:
    driver = webdriver.Chrome(service=serviceLap,options=options)

except:
    driver = webdriver.Chrome(service=servicePc,options=options)



class ReactView(APIView):
    def get(self, request):
        output = [{"nama":output.nama,"nomor":output.nomor,"kartu":output.kartu,"nomorWa":output.nomorWa,"pulsa":output.pulsa,"harga":output.harga,"jam":output.jam}
                    for output in React.objects.all()]
        return Response(output)

    
    def post(self,request):
        serializer = ReactSerializer(data=request.data)
        nium = Selen()
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            kartu=serializer.data['kartu']
            nomorWa=serializer.data['nomorWa']
            nomor=serializer.data['nomor']
            nama=serializer.data['nama']
            pulsa=serializer.data['pulsa']
            harga=serializer.data['harga']
            jam=serializer.data['jam']
            try:
                nium.gas(driver,nama,nomor,kartu,nomorWa,pulsa,harga,jam)
                print("Nium gas Berhasil")
            except WebDriverException as udin:
                print("NIUM GAGAL")

            return Response({"pesan":"berhasil"})


def OTPgen():
    otp=""
    for i in range(4):
        otp+= str(r.randint(1,9))
    return otp
    

        

class ReactToken(APIView):
    def get(self, request):
        return Response(dataPulsa)
    


    
class ReactPrefix(APIView):
    def get(self, request):
        return Response(dataPrefix)
    

class SendOTP(APIView):
    def post(self,request):
        serializer = TokenSendSerializer(data=request.data)
        nium = OTPsend()
        if serializer.is_valid():
            phone_number = serializer.validated_data['phone_number']
            nomor = serializer.data['phone_number']
            otp = OTPgen()

            token = Token.objects.create(phone_number=phone_number, otp=otp)
            token.created_at = now()
            token.save()

            print(nomor)

            try:
                nium.gas(driver,nomor,otp)
                return Response({'message':'Kode OTP sudah dikirimkan'})
            except WebDriverException as ll:
                print(ll.msg)
                return Response({'message':'Kode OTP gagal dikirimkan'})

        return Response({'cekerror':serializer.errors})
                    
    

class VerifyOTP(APIView):
    def post(self,request):
        serializer = VerifyTokenSerializer(data=request.data)

        if serializer.is_valid():
            phone_number= serializer.validated_data['phone_number']
            entered_otp = serializer.validated_data['otp']

            try:
                token = Token.objects.get(phone_number=phone_number, otp=entered_otp)
                token.delete()

                return Response({'message':'OTP terverifikasi'})
            
            except Token.DoesNotExist:
                return Response({'message':'OTP tidak sesuai'})
            
        return Response(serializer.errors)



