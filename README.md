# 🌦 Cloud-Based Atmospheric Data Monitoring and Visualization Dashboard

A full-stack cloud monitoring dashboard that collects real-time atmospheric data using a weather API, stores timestamped records in Firebase Realtime Database, and visualizes them through an interactive React-based analytics interface.

This project demonstrates a complete cloud data pipeline architecture using **Flask + Firebase + React**.

---

# 📌 Project Overview

Modern monitoring systems rely on automated pipelines that continuously collect environmental data, store it securely in the cloud, and present insights visually.

This system simulates such a workflow:

Weather API → Flask Backend → Firebase Database → REST API → React Dashboard

The application retrieves atmospheric parameters like temperature, humidity, pressure, and wind speed and displays them in a modern monitoring dashboard.

---

# 🎯 Objectives

* Collect atmospheric data automatically using Weather API
* Store time-stamped data in Firebase Realtime Database
* Provide REST API endpoints via Flask
* Visualize live + historical trends in React dashboard
* Enable automatic periodic updates using scheduler
* Build deployable cloud-based monitoring system

---

# ⚙️ Tech Stack

## Frontend

* React.js
* Chart.js
* React ChartJS 2

## Backend

* Python
* Flask
* Flask-CORS
* APScheduler

## Cloud Database

* Firebase Realtime Database

## External API

* OpenWeatherMap API

---

# 🏗 System Architecture

Weather API
↓
Flask Backend
↓
Firebase Realtime Database
↓
REST API Endpoints
↓
React Visualization Dashboard

---

# 📊 Features

* Live atmospheric data monitoring
* Firebase cloud storage integration
* Timestamp-based data logging
* Auto-refreshing dashboard
* Metric-based visualization cards
* Weather condition indicator panel
* Recent-records monitoring table
* Scheduler-based automatic data collection
* REST API architecture

---

# 📁 Project Structure

```
weather-cloud-dashboard/
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── firebase_setup.py
│   ├── routes.py
│   ├── scheduler.py
│   ├── weather_service.py
│   ├── test_firebase_write.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── services/
│
├── .env
└── README.md
```

---

# 🔑 Environment Variables Setup

Create a `.env` file inside the project root directory:

```
WEATHER_API_KEY=your_openweather_api_key
FIREBASE_CREDENTIALS=backend/serviceAccountKey.json
DATABASE_URL=your_firebase_database_url
```

⚠️ Do not upload `.env` file to GitHub.

---

# 🚀 How to Run the Project Locally

## Step 1 — Clone Repository

```
git clone https://github.com/your-username/weather-cloud-dashboard.git
cd weather-cloud-dashboard
```

---

# 🖥 Backend Setup

Navigate to backend folder:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate environment (Windows):

```
venv\Scripts\activate
```

Install dependencies:

```
pip install -r requirements.txt
```

Run backend server:

```
python app.py
```

Backend runs at:

```
http://127.0.0.1:5000
```

---

# 🌐 Frontend Setup

Open a new terminal:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start React dashboard:

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 📡 API Endpoints

Fetch latest weather data:

```
/weather/latest
```

Fetch historical weather dataset:

```
/weather/history
```

---

# 🔄 Automatic Data Collection

Weather data is collected periodically using APScheduler and stored in Firebase database.

Example stored record:

```
temperature
humidity
pressure
wind_speed
condition
timestamp
```

---

# 📊 Dashboard Displays

The dashboard shows:

* Temperature
* Humidity
* Pressure
* Wind speed
* Weather condition
* Recent monitoring records table
* Automatic live updates

---

# ☁️ Deployment Strategy

Recommended deployment setup:

Frontend → Netlify
Backend → Render
Database → Firebase

This enables global access to the dashboard.

---

# 🔮 Future Enhancements

Possible upgrades:

* Multi-city monitoring dashboard
* Weather alerts system
* Email/SMS notifications
* Machine learning-based prediction
* User authentication
* Export analytics reports

---

# 🎓 Learning Outcomes

This project demonstrates:

* Cloud data pipeline architecture
* REST API development
* Firebase integration
* Scheduler automation
* React visualization dashboard
* External API integration
* Full-stack application deployment readiness

---

# 👨‍💻 Author

Developed as part of a cloud-based atmospheric monitoring and visualization system using modern full-stack technologies.
