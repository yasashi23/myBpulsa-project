from rest_framework import serializers
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['nama','nomor','kartu','nomorWa','pulsa','harga','jam']


class TokenSendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ("phone_number",)


class VerifyTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = "__all__"

