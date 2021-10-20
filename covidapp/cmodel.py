import numpy as np
import tensorflow as tf
from keras.models import load_model

# To use the model saved in the Json format, We are importing "model_from_json"
from tensorflow.keras.models import model_from_json


class FacialExpressionModel(object):

    """ A Class for Predicting the emotions using the pre-trained Model weights"""

    EMOTIONS_LIST = ["Mask", "No Mask"]

    # Whenever we create an instance of class , these are initialized
    def __init__(self, model):
        self.loaded_model = load_model(model)



    def predict_emotion(self, img):
        """ It predicts the Emotion using our pre-trained model and returns it """

        self.preds = self.loaded_model.predict(img)
        return FacialExpressionModel.EMOTIONS_LIST[np.argmax(self.preds)]

    def return_probabs(self, img):
        """  It returns the Probabilities of each emotions using pre-trained model """

        self.preds = self.loaded_model.predict(img, batch_size = 32)
        return self.preds
