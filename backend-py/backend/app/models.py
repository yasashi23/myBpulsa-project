from django.db import models

class React(models.Model):
    nama = models.CharField(max_length=30)
    nomorHp = models.CharField(max_length=15)
    pulsa = models.CharField(max_length=20)
    harga = models.CharField(max_length=20)
    pembayaran = models.CharField(max_length=50)
    
