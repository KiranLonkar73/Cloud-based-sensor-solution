import React from "react";

const tableStyle = {
  margin: "40px auto",
  borderCollapse: "collapse",
  width: "95%",
  background: "#1f2937",
  color: "white",
  fontSize: "20px",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0px 6px 24px rgba(0,0,0,0.4)"
};

const RecentRecordsTable = ({ history }) => {
  if (!history) return null;

 const records = [...new Map(
  Object.values(history)
    .reverse()
    .map(item => [item.timestamp.slice(0,16), item])
).values()].slice(0,3);
  return (
    <table style={tableStyle} border="1">
      <thead style={{
  background: "#2563eb",
  fontSize: "22px"
}}>
        <tr>
          <th>Timestamp</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Pressure</th>
        </tr>
      </thead>

      <tbody>
        {records.map((r, index) => (
          <tr
  key={index}
  style={{
    textAlign: "center",
    height: "55px"
  }}
>
            <td>{r.timestamp}</td>
            <td>{r.temperature}</td>
            <td>{r.humidity}</td>
            <td>{r.pressure}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentRecordsTable;