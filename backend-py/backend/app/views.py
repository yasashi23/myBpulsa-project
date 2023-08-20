from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from seleniumnya.Selen import Selen
# from seleniumnya.Selen import RunServer
from rest_framework.response import Response
import json


# pc
jsonPrefix = '/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/dataMitra/nomorDiketahui.json'
jsonHargaPulsa = '/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/dataMitra/dataPulsa.json'

# laptop
# jsonPrefix = '/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/dataMitra/nomorDiketahui.json'
# jsonHargaPulsa = '/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/dataMitra/dataPulsa.json'

with open(jsonPrefix,'r') as file:
    dataPrefix=json.load(file)

with open(jsonHargaPulsa,'r') as file:
    dataPulsa=json.load(file)

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

options = Options()
options.add_experimental_option("debuggerAddress","localhost:9222")
service = ChromeService(executable_path='/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/backend/seleniumnya/chrome/chromedriver') 
# service = ChromeService(executable_path='/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/backend/seleniumnya/popLapChrome/chromedriver') 

driver = webdriver.Chrome(service=service,options=options)




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
            except:
                print("NIUM GAGAL")

            print(serializer.data)
            return Response({"pesan":"berhasil"})
        

class ReactToken(APIView):
    def get(self, request):
        return Response(dataPulsa)
    
class ReactPrefix(APIView):
    def get(self, request):
        return Response(dataPrefix)