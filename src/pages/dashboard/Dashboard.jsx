import React from "react";
import moment from "moment";
import { Table, TableCell, TableRow, Typography } from "@mui/material";
import sampleData from "./sample-weather-data.json";

const Dashboard = () => {
  console.log("sample data =>", sampleData);
  const {
    response: { categoryAnalysisWeekly, weatherData },
  } = sampleData;
  console.log("categoryAnalysisWeekly =>", categoryAnalysisWeekly);

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
  console.log("sortedList ==>", sortedList);

  const categoryEntires = Object.entries(sortedList)
  categoryEntires.forEach(([key, value]) => console.log(`${key}: ${value}`))

  return (
    <div style={{ width: "100" }}>
      <Typography>Demo</Typography>
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

            {/* <TableCell>1/24</TableCell>
            <TableCell>1/25</TableCell>
            <TableCell>1/26</TableCell>
            <TableCell>1/27</TableCell>
            <TableCell>1/28</TableCell>
            <TableCell>1/29</TableCell>
            <TableCell>1/30</TableCell> */}
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

            {/* <TableCell>Mon</TableCell>
            <TableCell>Tue</TableCell>
            <TableCell>Wed</TableCell>
            <TableCell>Thu</TableCell>
            <TableCell>Fri</TableCell>
            <TableCell>Sat</TableCell>
            <TableCell>Sun</TableCell> */}
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

            {/* <TableCell>01/27-01/02</TableCell>
            <TableCell>01/03-01/09</TableCell>
            <TableCell>01/10-01/16</TableCell>
            <TableCell>01/17-01/23</TableCell>
            <TableCell>01/24-01/30</TableCell> */}

            {customWeatherData.slice(0, 7).map((data, index) => {
              return (
                <TableCell key={index}>
                  {data.hiTempNum}/{data.loTempNum}
                </TableCell>
              );
            })}

            {/* <TableCell>77'/44'</TableCell>
            <TableCell>77'/44'</TableCell>
            <TableCell>77'/44'</TableCell>
            <TableCell>77'/44'</TableCell>
            <TableCell>77'/44'</TableCell>
            <TableCell>77'/44'</TableCell>
            <TableCell>77'/44'</TableCell> */}
            <TableCell>WOs % Total</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Sales</TableCell>

            {customCategoryAnalysisWeekly.map((data, index) => {
              return <TableCell key={index}>{data.psaTotalSales}</TableCell>;
            })}

            {/* <TableCell>41</TableCell>
            <TableCell>7</TableCell>
            <TableCell>10</TableCell>
            <TableCell>12</TableCell>
            <TableCell>7</TableCell> */}

            {/* some othere data */}
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>100.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>PSA Total</TableCell>
            <TableCell>WOs</TableCell>
            {customCategoryAnalysisWeekly.map((data, index) => {
              return (
                <TableCell key={index}>{data.psaTotalWriteOffs}</TableCell>
              );
            })}

            {/* <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell> */}

            {/* some othere data */}
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>10</TableCell>
            <TableCell>100.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Del</TableCell>
            <TableCell>294</TableCell>
            <TableCell>294</TableCell>
            <TableCell>444</TableCell>
            <TableCell>444</TableCell>
            <TableCell>444</TableCell>
            {/* some othere data */}
            <TableCell>.</TableCell>
            <TableCell>3</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Sales</TableCell>
            <TableCell>35</TableCell>
            <TableCell>2</TableCell>
            <TableCell>6</TableCell>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            {/* some othere data */}
            <TableCell>.</TableCell>
            <TableCell>3</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
          </TableRow>


        {/* {categoryEntires.forEach(([key, value]) => {
          return (
            <TableRow>
              <TableCell>{key}</TableCell>
              <TableCell>WOsss</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          )
        })} */}


          <TableRow>
            <TableCell>Baby food</TableCell>
            <TableCell>WOs</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>1</TableCell>
            {/* some othere data */}
            <TableCell>.</TableCell>
            <TableCell>0</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Del</TableCell>
            <TableCell>444</TableCell>
            <TableCell>444</TableCell>
            <TableCell>444</TableCell>
            <TableCell>444</TableCell>
            <TableCell>444</TableCell>
            {/* some othere data */}
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
          </TableRow>



          <TableRow>
            <TableCell />
            <TableCell>Sales</TableCell>
            <TableCell>35</TableCell>
            <TableCell>35</TableCell>
            <TableCell>35</TableCell>
            <TableCell>35</TableCell>
            <TableCell>35</TableCell>
            {/* some othere data */}
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Backing</TableCell>
            <TableCell>WOs</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>1</TableCell>
            {/* some othere data */}
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
          </TableRow>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
