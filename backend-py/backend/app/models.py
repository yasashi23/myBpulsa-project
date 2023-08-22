from django.db import models
from django.utils.timezone import now

class React(models.Model):
    nama = models.CharField(max_length=30)
    nomor = models.CharField(max_length=15)
    kartu = models.CharField(max_length=12)
    nomorWa = models.CharField(max_length=15)
    pulsa = models.CharField(max_length=20)
    harga = models.CharField(max_length=20)
    jam = models.CharField(max_length=10)


class Token(models.Model):
    phone_number = models.CharField(max_length=15)
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now=True)
    
