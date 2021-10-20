from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
# import pydirectinput
# from pynput.keyboard import Key, Controller

# from allauth.account.views import SignupView, LoginView

from django.http.response import StreamingHttpResponse
import re
import sys



sys.path.insert(0, '/home/gokil7/Documents/Productivity/Programming/DeepLearning/MaskDetection/maskDetection/Covid/covidapp')

from camera import VideoCamera
# from cameraCovid import VideoCamera

# from camera2 import VideoCamera

# from detect_mask_video import MaskDetect

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'


# class MyLoginView(LoginView):
#     template_name = 'covidapp/account/login.html'

def check(email):
    if(re.fullmatch(regex, email)):
        return 1

    else:
        return 0


def index(request):
    return render(request, 'covidapp/index.html')


def sys(request):
    return HttpResponse("Design")


def registration(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST.get('email', False)
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        flag = check(email)
        print(flag)
        
        if password1 == password2:
            if User.objects.filter(username = username).exists():
                messages.info(request, 'Username Taken', extra_tags="uname")
                return redirect('registration')
            elif flag == 0:
                messages.error(request, 'Enter a valid Email', extra_tags="email")
                return redirect('registration')
            else:
                user = User.objects.create_user(
                username=username, password=password1, email=email)
                user.save()
                return redirect('login')

        else:
            messages.info(request, 'Passwords do  not match', extra_tags="pass")                    
            return redirect('registration')
        
        return redirect('/')

    else:
        return render(request, 'covidapp/registration.html')


def login(request):
    if request.method == 'POST':
        username = request.POST['uname']
        password = request.POST['pass']

        user = auth.authenticate(username = username, password = password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Invalid Credentials')
            return redirect('login')
    else:
        return render(request, 'account/login.html')


def logout(request):
    auth.logout(request)
    return redirect('/')


def gen(camera):
	while True:
		frame = camera.get_frame()
		yield (b'--frame\r\n'
				b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


def video_feed(request):

    return StreamingHttpResponse(gen(VideoCamera()),
					content_type='multipart/x-mixed-replace; boundary=frame')
    
