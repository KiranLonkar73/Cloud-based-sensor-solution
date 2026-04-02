# 🌦 Cloud-Based Atmospheric Data Monitoring and Visualization Dashboard

A cloud-enabled weather monitoring dashboard that collects live atmospheric data using a public weather API, stores it in Firebase Realtime Database, and visualizes historical trends through an interactive React dashboard.

This project demonstrates a complete cloud data pipeline architecture using Python Flask, Firebase, and React.

---

## 📌 Project Overview

Modern monitoring systems rely on cloud-based pipelines to collect, store, process, and visualize environmental data in real time.
This project simulates such a pipeline by automatically retrieving atmospheric data from a weather API and presenting it in an analytics dashboard.

Pipeline flow:

Weather API → Flask Backend → Firebase Realtime Database → REST API → React Dashboard

---

## 🎯 Objectives

* Collect atmospheric data automatically from a weather API
* Store timestamped records in Firebase Realtime Database
* Provide REST API endpoints using Flask
* Visualize historical weather trends using React charts
* Enable automatic periodic updates using a scheduler
* Build a deployable full-stack cloud monitoring application

---

## ⚙️ Tech Stack

Frontend

* React.js
* Chart.js
* React ChartJS 2

Backend

* Python
* Flask
* Flask-CORS
* APScheduler

Cloud Database

* Firebase Realtime Database

External Data Source

* OpenWeatherMap API

Deployment Ready Platforms

* Render (Backend)
* Netlify (Frontend)

---

## 🏗 System Architecture

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

## 📊 Features

* Live atmospheric data collection
* Cloud-based storage using Firebase
* Automatic timestamped data logging
* Historical trend visualization
* Temperature trend charts
* Humidity trend charts
* Pressure trend charts
* Wind speed monitoring
* Auto-refresh dashboard updates
* Scheduler-based periodic data capture
* Modular backend architecture

---

## 📁 Project Structure

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

## 🔑 Environment Variables

Create a `.env` file inside the root directory:

```
WEATHER_API_KEY=your_api_key_here
FIREBASE_CREDENTIALS=backend/serviceAccountKey.json
DATABASE_URL=your_firebase_database_url
```

---

## 🚀 Running the Project Locally

### Step 1 — Clone Repository

```
git clone <your-repo-link>
cd weather-cloud-dashboard
```

---

### Step 2 — Setup Backend

```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Backend runs at:

```
http://127.0.0.1:5000
```

---

### Step 3 — Setup Frontend

Open new terminal:

```
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 📈 API Endpoints

Get latest weather record

```
/weather/latest
```

Get complete historical dataset

```
/weather/history
```

---

## 🔄 Automatic Data Collection

Weather data is automatically collected using APScheduler at fixed intervals and stored in Firebase with timestamps.

Example record format:

```
temperature
humidity
pressure
wind_speed
condition
timestamp
```

---

## 📊 Dashboard Preview

Dashboard displays:

* Current atmospheric conditions
* Historical temperature trends
* Humidity variations over time
* Pressure trend visualization
* Wind speed monitoring

---

## ☁️ Deployment Strategy

Recommended deployment setup:

Frontend → Netlify
Backend → Render
Database → Firebase

This enables global public access to the dashboard.

---

## 🔮 Future Enhancements

Possible extensions:

* Multi-city monitoring support
* Weather alerts based on thresholds
* Email/SMS notification integration
* Machine learning weather prediction
* Role-based login authentication
* Dark mode dashboard UI
* Export analytics reports

---

## 🎓 Learning Outcomes

This project demonstrates:

* Cloud data pipeline design
* REST API development
* Firebase integration
* Scheduler-based automation
* React visualization dashboards
* Full-stack application architecture
* External API integration

---

## 👨‍💻 Author

Developed as part of a cloud-based monitoring and visualization system project using modern full-stack technologies.
