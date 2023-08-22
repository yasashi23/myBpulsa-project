"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',ReactView.as_view(),name="anything"),
    path('dataPulsa/',ReactToken.as_view(),name="pulsa"),
    path('dataPrefix/',ReactPrefix.as_view(),name="prefix"),
    path('send-otp/',SendOTP.as_view(), name='send-otp'),
    path('verify-otp/',VerifyOTP.as_view(), name='verify-otp')
]
