import os
import sys
import dill

from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV

from src.exception import CustomException


def save_object(file_path, obj):
    try:
        dir_path = os.path.dirname(file_path)

        os.makedirs(dir_path, exist_ok=True)

        with open(file_path, "wb") as file_obj:
            dill.dump(obj, file_obj)

        print(f"Object saved successfully at: {file_path}")

    except Exception as e:
        raise CustomException(e, sys)


def load_object(file_path):
    try:
        with open(file_path, "rb") as file_obj:
            return dill.load(file_obj)

    except Exception as e:
        raise CustomException(e, sys)


def evaluate_models(
    X_train,
    y_train,
    X_test,
    y_test,
    models,
    param
):
    try:

        report = {}

        for model_name, model in models.items():

            print(f"\nTraining {model_name}...")

            params = param.get(model_name, {})

            if params:
                gs = GridSearchCV(
                    estimator=model,
                    param_grid=params,
                    cv=3,
                    n_jobs=-1,
                    verbose=0
                )

                gs.fit(X_train, y_train)

                model.set_params(**gs.best_params_)

            model.fit(X_train, y_train)

            y_train_pred = model.predict(X_train)
            y_test_pred = model.predict(X_test)

            train_score = accuracy_score(
                y_train,
                y_train_pred
            )

            test_score = accuracy_score(
                y_test,
                y_test_pred
            )

            print(
                f"{model_name} | "
                f"Train Accuracy: {train_score:.4f} | "
                f"Test Accuracy: {test_score:.4f}"
            )

            report[model_name] = test_score

        return report

    except Exception as e:
        raise CustomException(e, sys)