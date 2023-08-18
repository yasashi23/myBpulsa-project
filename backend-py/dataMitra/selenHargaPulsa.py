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
# elements[0].click()

# time.sleep(2)

# print(elHarga[0].text)
def newHarga(puls,harg):
    harga = int(harg.replace("Rp","").replace(".",""))
    pulsa= int(puls.replace(".",""))

    if pulsa > 150000:
        return pulsa
    else:
        if pulsa > harga:
            newHarga = pulsa+600
            return newHarga
        else:
            # newNum = harga+((harga%1000)+500)
            newHarga = harga+650
            return newHarga


        
        


for jj in elements:
    ini = jj.text
    print(ini)
    jj.click()
    time.sleep(2)
    elPulsa = driver.find_elements(By.CSS_SELECTOR,'.c-transaction-item .c-transaction-item__left span')
    elHarga = driver.find_elements(By.CSS_SELECTOR,'.c-transaction-item .c-transaction-item__right span')
    time.sleep(2)
    ind = None
    for i, item in enumerate(data):
        if item["kartu"] == ini:
            ind = i
            break
    isiPulsa = data[ind]['isiPulsa']
    print(data[ind])

    for element in range(len(elPulsa)):
        pulsanya = elPulsa[element].text
        harganya = elHarga[element].text
        newPrice = newHarga(pulsanya,harganya)
        newDat = {"pulsa":pulsanya,"harga":harganya,"hargaBaru":newPrice}
        print(newDat)
        isiPulsa.append(newDat)
        data.append(data[ind])
        print(newDat)
        with open(jsonP,'w') as files:
            json.dump(data,files,indent=4)
        time.sleep(1)
    time.sleep(2)








    


