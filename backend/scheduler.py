from apscheduler.schedulers.background import BackgroundScheduler
from weather_service import fetch_weather_data
from firebase_setup import get_database_reference
from datetime import datetime


def store_weather_data():
    ref = get_database_reference()

    weather = fetch_weather_data()

    weather["timestamp"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    ref.push(weather)

    print("Weather data stored automatically")


def start_scheduler():
    scheduler = BackgroundScheduler()

    scheduler.add_job(store_weather_data, "interval", minutes=1)

    scheduler.start()