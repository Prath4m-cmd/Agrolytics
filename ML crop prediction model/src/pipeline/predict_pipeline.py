import sys
from unittest import result
import pandas as pd

from src.exception import CustomException
from src.utils import load_object

class PredictPipeline:
    def __init__(self):
        pass

    def predict(self, features):
        try:
            model_path = "artifacts/model.pkl"
            preprocessor_path = "artifacts/preprocessor.pkl"
            label_encoder_path = "artifacts/label_encoder.pkl"

            # Load objects
            model = load_object(model_path)
            preprocessor = load_object(preprocessor_path)
            label_encoder = load_object(label_encoder_path)

            # Transform input data
            data_scaled = preprocessor.transform(features)

            # Predict encoded class
            pred = model.predict(data_scaled)

            print("Prediction =", pred)
            print("Prediction[0] =", pred[0])

            result = label_encoder.inverse_transform(
            [int(pred[0])]
            )[0]

            print("Decoded Result =", result)
            return result
        
        

        except Exception as e:
            raise CustomException(e, sys)


class CustomData:
    def __init__(
        self,
        N: int,
        P: int,
        K: int,
        temperature: float,
        humidity: float,
        ph: float,
        rainfall: float
    ):

        self.N = N
        self.P = P
        self.K = K
        self.temperature = temperature
        self.humidity = humidity
        self.ph = ph
        self.rainfall = rainfall

    def get_data_as_dataframe(self):
        try:
            custom_data_input_dict = {
                "N": [self.N],
                "P": [self.P],
                "K": [self.K],
                "temperature": [self.temperature],
                "humidity": [self.humidity],
                "ph": [self.ph],
                "rainfall": [self.rainfall]
            }

            return pd.DataFrame(custom_data_input_dict)

        except Exception as e:
            raise CustomException(e, sys)

