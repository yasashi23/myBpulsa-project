from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.middleware.csrf import get_token
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# https://www.youtube.com/watch?v=n2T9rmFmo48
# pip install -r requit.txt