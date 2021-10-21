# Face Mask Detection Application

A web application that detects if user is wearing mask or not. 😷

## This application contains:
* [A video Feed](#video-feed-container) container
* [A Covid19 stats Tracker](#covid-tracker-container) container
* And a custom [Login/Signup Form](#login-and-signup-form)

## Video Feed Container
* This container shows live video feed of the user and subsequently detects if they are wearing mask or not.
* Deep Learning model with Transfer Learning (<a href="https://keras.io/api/applications/mobilenet/" target=”_blank”>MobileNet v2</a>) is used to build a model with a high accuracy of <b>99.22%</b>.
* Dataset used: <a href="https://www.kaggle.com/omkargurav/face-mask-dataset" target=”_blank”>Face Mask Detection Data set</a> by Omkar Gurav

## Covid Tracker Container
* This tracker gives aggregate as well as daily updates of Covid19 statistics of India, along with statistics of top 3 states, ordered on the basis of their respective confirmed cases.
* Every statistic is colour coded and automatically updates after a specified interval.
* API used for tracking is procured from <a href="https://github.com/covid19india/api" target=”_blank”>covid19india.org</a>

<img src="https://user-images.githubusercontent.com/51751331/138309779-51b9350a-9596-4464-ba80-3fb60799e796.jpg" width="60%"></img> 

## Login and Signup Form
* A custom Login form with Username and Password Verification, along with Login with Google feature using Google's OAuth 2.0 API.
* And a signup form with Email Validation, Password match Verification

## Modules Used:
<a href="https://github.com/gokil7/covidMaskDetection/blob/main/requirements.txt" target=”_blank”>Requirements.txt</a>

## Future Scope:
* To store images of people "Not wearing Mask" onto a MongoDB database model and then to display them in a container.
* To host this app live, probably to Heroku. Not able to currently do this, because as of now, project use OpenCV's cv2.VideoCapture() to capture the frames from webcam, but the drawback of this method being it works on the computer where the code is hosted.
If I were to host this app live, then the project will be hosted on a Heroku server and thus will access that server's camera, which is not what we want, we want the client's camera, also there is no camera there.., so to work
around this WebRTC is used. So future work will be to implement WebRTC protocols in the project to communicate between server and client.


### Thank You

