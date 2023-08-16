from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from seleniumnya.Selen import Selen
# from seleniumnya.Selen import RunServer
from rest_framework.response import Response

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

options = Options()
options.add_experimental_option("debuggerAddress","localhost:9222")
service = ChromeService(executable_path='/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/backend/seleniumnya/chrome/chromedriver')
driver = webdriver.Chrome(service=service,options=options)




class ReactView(APIView):
    def get(self, request):
        output = [{"nama":output.nama, 
                    "nomorHp":output.nomorHp,
                    "pulsa":output.pulsa,
                    "harga":output.harga,
                    "pembayaran":output.pembayaran
                    }
                    for output in React.objects.all()]
        print(output)
        return Response(output)

    
    def post(self,request):
        serializer = ReactSerializer(data=request.data)
        nium = Selen()
        
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            nomor=serializer.data['nomorHp']
            name=serializer.data['nama']
            pulsa=serializer.data['pulsa']
            pembayaran=serializer.data['pembayaran']
            total=serializer.data['harga']
            # print(serializer.data['department'])
            nium.gas(driver,nomor,name,pulsa,pembayaran,total)
            return Response({"pesan":"berhasil"})
        