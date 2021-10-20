import cv2
from keras.models import load_model
import numpy as np
import tensorflow as tf

from cmodel import FacialExpressionModel

model = FacialExpressionModel("modelTransferLearning.model")

# Creating an instance of the class with the parameters as model and its weights.

# Loading the classifier from the file.
facec = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
bw_threshold = 80

class VideoCamera(object):

    """ Takes the Real time Video, Predicts the Emotion using pre-trained model. """

    def __init__(self):
        self.video = cv2.VideoCapture(-1)

    def __del__(self):
        self.video.release()

    def get_frame(self):
        """It returns camera frames along with bounding boxes and predictions"""

        # Reading the Video and grasping the Frames
        _, frame = self.video.read()

        frame = cv2.flip(frame, 1)

        if(frame is not None ):
            img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        (thresh, black_and_white) = cv2.threshold(gray, bw_threshold, 255, cv2.THRESH_BINARY)

        # Image size is reduced by 30% at each image scale.
        scaleFactor = 1.1

        # 5 neighbors should be present for each rectangle to be retained.
        minNeighbors = 4

        # Detect the Faces in the given Image and store it in faces.
        # faces = facec.detectMultiScale(img, scaleFactor, minNeighbors)
        faces = facec.detectMultiScale(img)
        faces_bw = facec.detectMultiScale(black_and_white, scaleFactor, minNeighbors)

        if(len(faces)== 0 and len(faces_bw) == 0):
            cv2.putText(img, "No faces found..", (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2, cv2.LINE_AA)
        else:
        # Iterating through all the faces detected
            for box in faces:
                x, y, w, h = box
                # Taking the Face part in the Image as Region of Interest.
                roi = img[y:y+h, x:x+w]

                roi_gray = gray[y:y + h, x:x + w]

                # Let us resize the Image accordingly to use pretrained model.
                roi = cv2.resize(roi, (224, 224))
                normalized=roi/255.0
                reshaped=normalized.reshape(1, 224,224,3)


                prediction = model.predict_emotion(
                    reshaped)




                if(prediction != "No Mask"):
                    prediction = "Mask"

                Text = str(prediction)
                Text_Color = (255,255,255)

                Thickness = 2
                Font_Scale = 1
                Font_Type = cv2.FONT_HERSHEY_TRIPLEX

                cv2.putText(frame, Text, (x-5, y-10), Font_Type,
                            Font_Scale, Text_Color, Thickness)

                xc = int((x + x+w)/2)
                yc = int((y + y+h)/2)
                radius = int(w/2)

                cv2.rectangle(frame, (x, y), (x+w, y+h), (0,0,0), Thickness)



        _, jpeg = cv2.imencode('.jpg', frame)

        return jpeg.tobytes()


