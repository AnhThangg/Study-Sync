import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Chart_Falculty.scss"

const Chart_Faculty = () => {
  const [options] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ['CNPM', 'Cơ Khí', 'Du Lịch', 'Ngân Hàng', 'Tiếng Trung', 'IT']
    },
    colors: ['#DC143C'], // Màu của các cột
  });

  const [series] = useState([
    {
      name: "Sinh Viên",
      data: [30,12,25,41,51,62]
    }
  ]);

  return (
    <div className="Chart_Faculty">
      <div className="row">
        <div className="mixed-chart" >
          <Chart
            options={options}
            series={series}
            type="bar"
            width="600"
          />
        </div>
      </div>
    </div>
  );
};

export default Chart_Faculty;
