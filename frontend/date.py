import datetime
import math



x = datetime.datetime.now()
hour = int(x.strftime("%H"))
minute = int(x.strftime("%M"))
second = int(x.strftime("%S"))


timeToMiliSeconds = ((hour*3600)+(minute*60)+(second*1)+2*3600)

jam = f"{math.floor((timeToMiliSeconds - (timeToMiliSeconds%3600))/3600)}"
menit = f"{math.floor(((timeToMiliSeconds%3600)-((timeToMiliSeconds%3600)%60))/60)}"
detik =f"{math.floor((timeToMiliSeconds%3600)%60)}"

if len(detik) < 2 :
    detik = f"0{detik}"

print(detik)

