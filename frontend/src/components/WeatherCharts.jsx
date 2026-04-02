import React from "react";

const badgeStyle = {
  background: "linear-gradient(135deg,#3b82f6,#2563eb)",
  color: "white",
  padding: "28px",
  borderRadius: "18px",
  width: "360px",
  textAlign: "center",
  margin: "40px auto",
  fontSize: "28px",
  fontWeight: "bold",
  boxShadow: "0px 10px 28px rgba(59,130,246,0.5)"
};

const WeatherCharts = ({ latest }) => {
  if (!latest) return null;

  return (
    <div style={badgeStyle}>
      ☁ Weather Condition
      <br />
      <strong>{latest.condition}</strong>
      <br />
      <small>Updated: {latest.timestamp}</small>
    </div>
  );
};

export default WeatherCharts;