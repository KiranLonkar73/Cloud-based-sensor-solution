import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  marginBottom: "30px"
};

const cardStyle = {
  background: "#334155",
  padding: "28px",
  borderRadius: "18px",
  boxShadow: "0px 8px 24px rgba(0,0,0,0.45)",
  width: "200px",
  textAlign: "center",
  fontSize: "22px",
  color: "white",
  transition: "transform 0.2s ease"
};

const WeatherCards = ({ data }) => {
  if (!data) return <p>Loading latest weather...</p>;

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        🌡
        <br />
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>
            {data.temperature} °C
          </div>        <br />
        Temperature
      </div>

      <div style={cardStyle}>
        💧
        <br />
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>
            {data.humidity} °C
          </div>        
          <br />
        Humidity
      </div>

      <div style={cardStyle}>
        📊
        <br />
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>
  {data.pressure} °C
</div>
        <br />
        Pressure
      </div>

      <div style={cardStyle}>
        💨
        <br />
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>
  {data.wind_speed} °C
</div>
        <br />
        Wind Speed
      </div>
    </div>
  );
};

export default WeatherCards;