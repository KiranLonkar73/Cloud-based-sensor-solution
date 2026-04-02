from flask import Blueprint, jsonify
from firebase_setup import get_database_reference

routes = Blueprint("routes", __name__)


@routes.route("/weather/history", methods=["GET"])
def get_weather_history():

    ref = get_database_reference()

    data = ref.get()

    return jsonify(data)


@routes.route("/weather/latest", methods=["GET"])
def get_latest_weather():

    ref = get_database_reference()

    data = ref.get()

    if data:

        latest_key = list(data.keys())[-1]

        return jsonify(data[latest_key])

    return jsonify({"message": "No data available"})