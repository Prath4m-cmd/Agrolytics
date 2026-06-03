import os
import sys
import numpy as np
import pandas as pd

from dataclasses import dataclass

from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import LabelEncoder

from src.exception import CustomException
from src.utils import save_object


@dataclass
class DataTransformationConfig:
    preprocessor_obj_file_path = "artifacts/preprocessor.pkl"
    label_encoder_file_path = "artifacts/label_encoder.pkl"


class DataTransformation:
    def __init__(self):
        self.data_transformation_config = DataTransformationConfig()

    def get_data_transformer_object(self):

        numerical_columns = [
            "N",
            "P",
            "K",
            "temperature",
            "humidity",
            "ph",
            "rainfall"
        ]

        preprocessor = ColumnTransformer(
            [
                (
                    "StandardScaler",
                    StandardScaler(),
                    numerical_columns
                )
            ]
        )

        return preprocessor

    def initiate_data_transformation(
        self,
        train_path,
        test_path
    ):

        try:

            train_df = pd.read_csv(train_path)
            test_df = pd.read_csv(test_path)

            target_column = "label"

            input_train = train_df.drop(
                columns=[target_column]
            )

            input_test = test_df.drop(
                columns=[target_column]
            )

            y_train = train_df[target_column]
            y_test = test_df[target_column]

            preprocessor = self.get_data_transformer_object()

            X_train = preprocessor.fit_transform(
                input_train
            )

            X_test = preprocessor.transform(
                input_test
            )

            le = LabelEncoder()

            y_train = le.fit_transform(y_train)
            y_test = le.transform(y_test)

            save_object(
                self.data_transformation_config.preprocessor_obj_file_path,
                preprocessor
            )

            save_object(
                self.data_transformation_config.label_encoder_file_path,
                le
            )

            train_arr = np.c_[X_train, y_train]
            test_arr = np.c_[X_test, y_test]

            return (
                train_arr,
                test_arr,
                self.data_transformation_config.preprocessor_obj_file_path
            )

        except Exception as e:
            raise CustomException(e, sys)