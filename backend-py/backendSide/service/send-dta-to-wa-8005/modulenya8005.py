import os,sys
popPc = os.path.abspath(os.path.join('..','..','..','backend','seleniumnya','chrome','chromedriver'))
popLap = os.path.abspath(os.path.join('..','..','..','backend','seleniumnya','popLapChrome','chromedriver'))

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
import random as r


def seleniumSet():

    options = Options()
    options.add_experimental_option("debuggerAddress","localhost:9222")

    servicePc = ChromeService(executable_path=popPc) 
    serviceLap = ChromeService(executable_path=popLap) 


    try:
        driver = webdriver.Chrome(service=serviceLap,options=options)
        print('di try')
    except:
        driver = webdriver.Chrome(service=servicePc,options=options)
        print('di except')


def OTPgen():
    otp=""
    for i in range(4):
        otp+= str(r.randint(1,9))
    return otp