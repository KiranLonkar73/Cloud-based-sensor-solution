import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("WEATHER_API_KEY")

CITY = "Nagpur"

FIREBASE_CREDENTIALS = os.getenv("FIREBASE_CREDENTIALS")

DATABASE_URL = os.getenv("DATABASE_URL")