from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
import time
import datetime
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.chrome.service import Service as ChromeService




waktu_sekarang = datetime.datetime.now()
menit = waktu_sekarang.minute
detik = waktu_sekarang.second
milidetik = waktu_sekarang.microsecond // 1000 




class Selen:
    def gas(self,drivernya,nama,nomor,kartu,nomorWa,pulsa,harga,jam):

            # cari = drivernya.find_element(By.CSS_SELECTOR,'div[data-testid="chat-list-search"]')
        link = "https://web.whatsapp.com/send/?phone=%2B"+nomorWa+"&amp;text&amp;type=phone_number&amp;app_absent=0"

        try:
            cek = drivernya.find_element(By.CSS_SELECTOR,'a#udinB')


            upEl = f""" const ud= document.getElementById("udinB"); ud.setAttribute("href","{link}");  ud.click()"""
            drivernya.execute_script(upEl)
            # chat = drivernya.find_element(By.CSS_SELECTOR,'._3Uu1_')

            print(f"Waktu saat ini: {detik} detik {milidetik} mil elnya ada")
        except NoSuchElementException:
            divApp = drivernya.find_element(By.CSS_SELECTOR,'div#app')
            newEl = f"""
                var newLink = document.createElement('a');
                newLink.id = 'udinB';
                newLink.href = '{link}';
                newLink.textContent = 'UdinB Link';
                arguments[0].insertAdjacentElement('afterend', newLink);
                """
            drivernya.execute_script(newEl,divApp)
            clickNewEl = """const ud= document.getElementById("udinB"); ud.click()"""
            time.sleep(2)
            drivernya.execute_script(clickNewEl)

            print(f"Waktu saat ini: {detik} detik {milidetik} mil elnya kaga ada")

        time.sleep(3)
        chat = drivernya.find_element(By.CSS_SELECTOR,'div._3Uu1_')
        chat.click()
        # time.sleep(3)
        # chat.send_keys("*Invoice Pembayaran Bpulsa*")
        pesan(chat,nama,nomor,kartu,pulsa,harga,jam)
        print(f"Waktu saat ini: {detik} detik {milidetik} mil sukses")


        # cari.send_keys(nomor)
        # cari.send_keys(Keys.ENTER)
        # time.sleep(3)
        # cont = drivernya.find_element(By.CSS_SELECTOR,'div._8nE1Y')
        # cont.click()
        time.sleep(3)
        return "berhasil"


def pesan(chat,nama,nomor,kartu,pulsa,harga,jam):
    # chat.click()
    chat.send_keys(f"Hi *{nama}*, Konfirmasi Pembayaran Dari bPulsa pada Jam {jam}")
    chat.send_keys(Keys.SHIFT + Keys.ENTER)
    chat.send_keys(Keys.SHIFT + Keys.ENTER)
    chat.send_keys(f"Nomor: {nomor}")
    chat.send_keys(Keys.SHIFT + Keys.ENTER)
    chat.send_keys(f"Kartu: {kartu}")
    chat.send_keys(Keys.SHIFT + Keys.ENTER)
    chat.send_keys(f"Pulsa: {pulsa}")
    chat.send_keys(Keys.SHIFT + Keys.ENTER)
    chat.send_keys(Keys.SHIFT + Keys.ENTER)
    chat.send_keys(f"Jadi, Total yang harus di bayarkan *{harga}*, bayar sebelum ....")
    chat.send_keys(Keys.SHIFT + Keys.ENTER)
    chat.send_keys("Terima kasih")
    chat.send_keys(Keys.SHIFT + Keys.ENTER)
    chat.send_keys(Keys.ENTER)