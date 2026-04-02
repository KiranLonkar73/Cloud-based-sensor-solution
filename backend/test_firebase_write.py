from firebase_setup import get_database_reference
from weather_service import fetch_weather_data
from datetime import datetime


def test_write():

    ref = get_database_reference()

    weather = fetch_weather_data()

    weather["timestamp"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    ref.push(weather)

    print("Weather data successfully stored in Firebase!")


test_write()