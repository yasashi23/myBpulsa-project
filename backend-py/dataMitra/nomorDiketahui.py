from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException

import json
import time

jsonP = 'nomorDiketahui.json'

with open(jsonP,'r') as file:
    data=json.load(file)

options = Options()
options.add_experimental_option("debuggerAddress","localhost:9222")
service = ChromeService(executable_path='/media/yasashibp/D/ngoding/latihan/dummy-pulsa-app/backend-py/backend/seleniumnya/chrome/chromedriver') 
# service = ChromeService(executable_path='/home/yasashibp/Documents/ngoding/project/dummy-pulsa-web/backend-py/backend/seleniumnya/popLapChrome/chromedriver') 

driver = webdriver.Chrome(service=service,options=options)
# driver.get('https://isipulsa.web.id/')
nomor = ['0','1','2','3','4','5','6','7','8','9']
elements = driver.find_element(By.CSS_SELECTOR,'div.field-container.input-phone input')

def getOperator():
    try:
        operator = driver.find_element(By.CSS_SELECTOR,'#operator_selected > div').get_attribute("class")
        newOperator = operator.replace("logo-operator ","")
        return newOperator
    except NoSuchElementException:
        ll = driver.find_element(By.CSS_SELECTOR,'#operator_selected').text
        newNum = ll.replace("XL - Axis","axis")
        return newNum




# print(elements)
elements.click()
time.sleep(2)
elements.send_keys("08")

for i in nomor:
    time.sleep(0.2)
    elements.send_keys(i)
    time.sleep(0.2)
    for x in nomor:
        time.sleep(0.2)
        elements.send_keys(x)
        time.sleep(0.2)
        operator = getOperator()
        time.sleep(0.1)
        ind = None
        for y, item in enumerate(data):
            if item["kartu"] == operator:
                ind = y
                break
        print(data[ind])
        getPrefix=data[ind]['prefixnya']
        prefix = elements.get_attribute("value")
        getPrefix.append(prefix)
        with open(jsonP,'w') as files:
            json.dump(data,files,indent=4)
        time.sleep(0.5)
        elements.send_keys(Keys.BACKSPACE)

    elements.send_keys(Keys.BACKSPACE)
    time.sleep(0.2)


# ind = None
# for y, item in enumerate(data):
#     if item["kartu"] == "telkomsel":
#         ind = y
#         break
# print(data[ind])