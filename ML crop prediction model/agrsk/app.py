from flask import Flask, render_template, request
import pickle
import pandas as pd

app = Flask(__name__)

# LOAD MODEL
model = pickle.load(
    open("model.pkl", "rb")
)

# LOAD PREPROCESSOR
preprocessor = pickle.load(
    open("preprocessor.pkl", "rb")
)

# LOAD LABEL ENCODER
label_encoder = pickle.load(
    open("label_encoder.pkl", "rb")
)


# HOME PAGE
@app.route("/")
def home():
    return render_template(
        "index.html"
    )


# RECOMMENDATION PAGE
@app.route("/recommendation")
def recommendation():
    return render_template(
        "recommendation.html"
    )


# PREDICTION
@app.route(
    "/predict",
    methods=["POST"]
)
def predict():

    try:

        N = float(request.form["Nitrogen"])
        P = float(request.form["Phosphorus"])
        K = float(request.form["Potassium"])

        temp = float(request.form["Temperature"])
        humidity = float(request.form["Humidity"])
        ph = float(request.form["Ph"])
        rainfall = float(request.form["Rainfall"])

        # CREATE DATAFRAME
        feature = pd.DataFrame([{
            "N": N,
            "P": P,
            "K": K,
            "temperature": temp,
            "humidity": humidity,
            "ph": ph,
            "rainfall": rainfall
        }])

        print("\n========== NEW PREDICTION ==========")
        print(feature)

        # PREPROCESS
        feature = preprocessor.transform(
            feature
        )

        # MODEL PREDICTION
        pred = model.predict(
            feature
        )

        print("Prediction =", pred)
        print("Prediction type =", type(pred))
        print("Prediction[0] =", pred[0])
        print("Prediction[0] type =", type(pred[0]))

        # TEMPORARY
        result = str(pred[0])

        print("Result =", result)

        return render_template(
            "recommendation.html",
            prediction=result
        )

    except Exception as e:

        print("\nERROR:")
        print(str(e))

        return render_template(
            "recommendation.html",
            prediction="ERROR : " + str(e)
        )


if __name__ == "__main__":
    app.run(
        debug=True
    )