import os
import sys

from dataclasses import dataclass

from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

from src.exception import CustomException
from src.utils import save_object


@dataclass
class ModelTrainerConfig:
    trained_model_file_path = os.path.join(
        "artifacts",
        "model.pkl"
    )


class ModelTrainer:
    def __init__(self):
        self.model_trainer_config = ModelTrainerConfig()

    def initiate_model_trainer(
        self,
        train_array,
        test_array
    ):

        try:

            X_train = train_array[:, :-1]
            y_train = train_array[:, -1]

            X_test = test_array[:, :-1]
            y_test = test_array[:, -1]

            model = KNeighborsClassifier(
                n_neighbors=5
            )

            model.fit(
                X_train,
                y_train
            )

            y_pred = model.predict(
                X_test
            )

            accuracy = accuracy_score(
                y_test,
                y_pred
            )

            print(
                f"KNN Accuracy: {accuracy:.4f}"
            )

            save_object(
                self.model_trainer_config.trained_model_file_path,
                model
            )

            return accuracy

        except Exception as e:
            raise CustomException(e, sys)