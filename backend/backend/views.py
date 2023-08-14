from django.http import HttpResponse
from django.shortcuts import render
import json
from django.http import JsonResponse

# def home(req):
#     return render(req,'members/home.html')

def home(request):
    if request.method == 'POST':
        nama = request.POST.get('nama')
        email = request.POST.get('email')
        pesan = request.POST.get('pesan')
        
        # Lakukan sesuatu dengan data yang diterima, misalnya menyimpan ke database
        data = {
            'nama': nama,
            'email': email,
            'pesan': pesan,
            'csrf_token': request.COOKIES.get('csrftoken')
        }  
        print(data)

        # return render(request, 'hasil.html', {'nama': nama, 'email': email, 'pesan': pesan})
    
    return render(request, 'members/home.html')
