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
          <th
            style={{
              paddingRight: "20px",
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>Category</label>
            <br />
            <label>Total PSA</label>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "130px",
              }}
            >
              <label>Sales</label>
              <br />
              <label>WOs</label>
            </div>
          </th>
          {categoryAnalysisWeekly.slice(0, 5).map((item, index) => {
            return (
              <th
                key={index}
                style={{ paddingRight: "20px", paddingTop: "20px" }}
              >
                <label>
                  {moment(item.toDate).format("MM-DD")}-
                  {moment(item.fromDate).format("MM-DD")}
                </label>
                <br />
                <br />
                <br />
                <br />
                <label>{item.psaTotalSales}</label>
                <br />
                <br />
                <label>{item.psaTotalWriteOffs}</label>
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

        <thead>
          <th
            style={{
              paddingRight: "20px",
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "130px",
              }}
            >
              <label>Del</label>
              <br />
              <label>Sales</label>
              <br />
              <label>Wo's</label>
            </div>
          </th>
          {categoryAnalysisWeekly.slice(0, 5).map((item, index) => {
            return (
              <th key={index} style={{ paddingRight: "20px", paddingTop: "20px" }}>
                <label>{item.deliveries}</label>
                <br />
                <br />
                <label>{item.sales}</label>
                <br />
                <br />
                <label>{item.deliveries}</label>
              </th>
            );
          })}
        </thead>
      </table>