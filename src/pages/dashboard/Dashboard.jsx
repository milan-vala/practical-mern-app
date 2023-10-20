import React, { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import moment from "moment";
import { Button, Table, TableCell, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import sampleData from "./sample-weather-data.json";

const Dashboard = () => {
  const userContext = useContext(AppContext);
  const navigate = useNavigate();
  const {
    response: { categoryAnalysisWeekly, weatherData },
  } = sampleData;

  const customWeatherData = weatherData.slice(0, 7);
  const customCategoryAnalysisWeekly = categoryAnalysisWeekly.slice(0, 5);

  const sortedList = {};
  categoryAnalysisWeekly.forEach((category) => {
    const categoryName = category.categoryDescription.replace(/\s/g, "");
    if (!sortedList[categoryName]) {
      sortedList[categoryName] = [];
    }
    sortedList[categoryName].push(category);
  });

  const categoryEntires = Object.entries(sortedList);

  return (
    <div style={{ width: "100" }}>
      <Typography>Demo</Typography>
      <Button
        onClick={() => {
          userContext.setIsLoggedIn(false);
          window.location.reload();
          navigate("/");
        }}
      >
        Logout
      </Button>
      <div
        style={{
          width: "90%",
          position: "absolute",
          top: "15%",
          left: "5%",
          border: "1px solid black",
        }}
      >
        <Table>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell>W5</TableCell>
            <TableCell>W4</TableCell>
            <TableCell>W3</TableCell>
            <TableCell>W2</TableCell>
            <TableCell>W1</TableCell>

            {customWeatherData.slice(0, 7).map((data, index) => {
              return (
                <TableCell key={index}>
                  {moment(data.wthrDte).format("MM/DD")}
                </TableCell>
              );
            })}
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />

            {customWeatherData.slice(0, 7).map((data, index) => {
              return (
                <TableCell key={index}>
                  {moment(data.wthrDte).format("ddd")}
                </TableCell>
              );
            })}

            <TableCell>Sales % Total</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Category</TableCell>
            <TableCell />

            {customCategoryAnalysisWeekly.slice(0, 5).map((data, index) => {
              return (
                <TableCell key={index}>
                  {moment(data.toDate).format("MM-DD")}-
                  {moment(data.fromDate).format("MM-DD")}
                </TableCell>
              );
            })}

            {customWeatherData.slice(0, 7).map((data, index) => {
              return (
                <TableCell key={index}>
                  {data.hiTempNum}/{data.loTempNum}
                </TableCell>
              );
            })}

            <TableCell>WOs % Total</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Sales</TableCell>

            {customCategoryAnalysisWeekly.map((data, index) => {
              return <TableCell key={index}>{data.psaTotalSales}</TableCell>;
            })}
          </TableRow>
          <TableRow>
            <TableCell>PSA Total</TableCell>
            <TableCell>WOs</TableCell>
            {customCategoryAnalysisWeekly.map((data, index) => {
              return (
                <TableCell key={index}>{data.psaTotalWriteOffs}</TableCell>
              );
            })}
          </TableRow>

          {categoryEntires.map(([key, value]) => {
            return (
              <>
                <TableRow>
                  <TableCell />
                  <TableCell>Del</TableCell>
                  {value.map((item, index) => {
                    return <TableCell key={index}>{item.deliveries}</TableCell>;
                  })}
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell>Sales</TableCell>
                  {value.map((item, index) => {
                    return <TableCell key={index}>{item.sales}</TableCell>;
                  })}
                </TableRow>
                <TableRow>
                  <TableCell>{key}</TableCell>
                  <TableCell>WO's</TableCell>
                  {value.map((item, index) => {
                    return <TableCell key={index}>{item.writeOffs}</TableCell>;
                  })}
                </TableRow>
              </>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
