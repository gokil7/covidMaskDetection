from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.index, name='index'),
    path('sysdesign/', views.sys, name='sys'),
    path('registration/', views.registration, name='registration'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('video_feed', views.video_feed, name='video_feed'),
]