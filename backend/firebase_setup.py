import firebase_admin
from firebase_admin import credentials, db
from config import FIREBASE_CREDENTIALS, DATABASE_URL


# Initialize Firebase only once
if not firebase_admin._apps:
    cred = credentials.Certificate(FIREBASE_CREDENTIALS)

    firebase_admin.initialize_app(cred, {
        "databaseURL": DATABASE_URL
    })


def get_database_reference():
    return db.reference("weather_data")