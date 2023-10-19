import React from "react";
import moment from "moment";
import sampleData from "./sample-weather-data.json";

const Dashboard = () => {
  console.log("sample data =>", sampleData);
  const {
    response: { categoryAnalysisWeekly, weatherData },
  } = sampleData;
  console.log("categoryAnalysisWeekly =>", categoryAnalysisWeekly);

  return (
    <div>
      <table>
        <thead>
          <th></th>
          <th>W5</th>
          <th>W4</th>
          <th>W3</th>
          <th>W2</th>
          <th>W1</th>
          {weatherData.map((item, index) => {
            return (
              <th key={index} style={{ padding: "0 30px 0 30px" }}>
                <label>{moment(item.wthrDte).format("MM/DD")}</label>
              </th>
            );
          })}
        </thead>
        <thead>
          {Array.apply(null, Array(6)).map((item, index) => (
            <th key={index}></th>
          ))}
          {weatherData.map((item, index) => {
            return (
              <th key={index} style={{ padding: "0 30px 0 30px" }}>
                <label>{moment(item.wthrDte).format("ddd")}</label>
              </th>
            );
          })}
        </thead>
        <br />
        <thead>
          <th style={{ paddingRight: "20px", paddingTop: "20px" }}>category</th>
          {categoryAnalysisWeekly.slice(0, 5).map((item, index) => {
            return (
              <th
                key={index}
                style={{ paddingRight: "20px", paddingTop: "20px" }}
              >
                {moment(item.toDate).format("MM-DD")}-
                {moment(item.fromDate).format("MM-DD")}
              </th>
            );
          })}
          {weatherData.map((item, index) => {
            return (
              <th key={index} style={{ padding: "0 30px 0 30px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="./weatherapp.png"
                    height={20}
                    width={20}
                    alt="weather-icon"
                  />
                  <label>
                    {item.hiTempNum}/{item.loTempNum}
                  </label>
                </div>
              </th>
            );
          })}
        </thead>
        <tbody>
          <tr>
            <table>
              <thead>
                <th>PSA Total</th>
              </thead>
            </table>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
