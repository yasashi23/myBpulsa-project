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
        link = "https://api.whatsapp.com/send?phone=%2B"+nomorWa+"&amp;text&amp;type=phone_number&amp;app_absent=0"

        try:
            cek = drivernya.find_element(By.CSS_SELECTOR,'a#udinB')
            upEl = f""" const ud= document.getElementById("udinB"); ud.setAttribute("href","{link}");  ud.click()"""
            drivernya.execute_script(upEl)

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

        pesan(chat,nama,nomor,kartu,pulsa,harga,jam)
        print(f"Waktu saat ini: {detik} detik {milidetik} mil sukses")
        time.sleep(3)
        return "berhasil"

class OTPsend:
    def gas(self,drivernya,nomor,otp):
        # link = "https://web.whatsapp.com/send/?phone=%2B"+nomor+"&amp;text&amp;type=phone_number&amp;app_absent=0"
        newNom = nomor.replace(" ","")
        link = "https://api.whatsapp.com/send?phone="+newNom+"&text=Kode%20OTP%3A%20"+otp+".%20Jangan%20berikan%20kepada%20orang%20lain.&type=phone_number&app_absent=0"

        print(link)
        try:
            cek = drivernya.find_element(By.CSS_SELECTOR,'a#udinB')
            upEl = f""" const ud= document.getElementById("udinB"); ud.setAttribute("href","{link}");  ud.click()"""
            drivernya.execute_script(upEl)

            print(f"Waktu saat ini: {detik} detik {milidetik} OTPSEND")

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
            time.sleep(1)
            drivernya.execute_script(clickNewEl)

            print(f"Waktu saat ini: {detik} detik {milidetik} OTP EXCEPT")

        time.sleep(3)
        chat = drivernya.find_element(By.CSS_SELECTOR,'div._3Uu1_')
        chat.click()
        time.sleep(1)
        chat.send_keys(Keys.ENTER)
        # pesanOtp(chat,otp)
        print(f"Waktu saat ini: {detik} detik {milidetik} mil sukses")
        time.sleep(1)
        return "berhasil"
    
    def gasError(self,drivernya,nomor,otp):
        time.sleep(2)
        chat = drivernya.find_element(By.CSS_SELECTOR,'div._3Uu1_')
        chat.click()
        time.sleep(1)
        chat.send_keys(Keys.ENTER)
        # pesanOtp(chat,otp)
        print(f"Waktu saat ini: {detik} detik {milidetik} mil sukses")
        time.sleep(1)
        return "berhasil"
    











def pesanOtp(chat, otp):
    chat.send_keys(f"Kode OTP: {otp}. Jangan berikan kepada orang lain.")
    chat.send_keys(Keys.ENTER)


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