import React, { useEffect, useState } from "react";

import WeatherCards from "../components/WeatherCards";
import WeatherCharts from "../components/WeatherCharts";
import RecentRecordsTable from "../components/RecentRecordsTable";

import {
  fetchLatestWeather,
  fetchWeatherHistory
} from "../services/api";

const pageStyle = {
  backgroundColor: "#111827",
  minHeight: "100vh",
  color: "#cbd5e1",
  padding: "30px"
};

const titleStyle = {
  textAlign: "center",
  fontSize: "42px",
  fontWeight: "bold",
  marginBottom: "40px",
  letterSpacing: "1px"
};

const Dashboard = () => {

  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState(null);

  useEffect(() => {

    const loadData = async () => {

      const latestData = await fetchLatestWeather();
      const historyData = await fetchWeatherHistory();

      setLatest(latestData);
      setHistory(historyData);

    };

    loadData();

    const interval = setInterval(loadData, 30000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div style={pageStyle}>

      <h1 style={titleStyle}>
        🌦 Cloud Weather Monitoring Dashboard
      </h1>

      <WeatherCards data={latest} />

      <WeatherCharts latest={latest} />

      <h2 style={{ textAlign: "center" }}>
        Recent Records
      </h2>

      <RecentRecordsTable history={history} />

    </div>

  );

};

export default Dashboard;