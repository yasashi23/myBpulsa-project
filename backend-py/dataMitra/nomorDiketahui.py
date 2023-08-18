from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import json
import time

jsonP = 'dataPulsa.json'

with open(jsonP,'r') as file:
    data=json.load(file)

options = Options()
options.add_experimental_option("debuggerAddress","localhost:9222")
# service = ChromeService(executable_path='/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/backend/seleniumnya/chrome/chromedriver') 
service = ChromeService(executable_path='/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/backend/seleniumnya/popLapChrome/chromedriver') 

driver = webdriver.Chrome(service=service,options=options)
# driver.get('https://mitra.bukalapak.com/pulsa/pricelist')

elements = driver.find_elements(By.CSS_SELECTOR,'div.c-panel.u-no-border--all span.c-ellipsis')
kartu = elements[0].text
