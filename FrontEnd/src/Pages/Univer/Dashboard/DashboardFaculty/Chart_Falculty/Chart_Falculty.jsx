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
    colors: ['#DC143C'],
    fill: {
      borderRadius: '20px',
      type: 'gradient', // Loại gradient
      gradient: {
        shade: 'dark', // Độ sáng của gradient
        type: 'vertical', // Hướng gradient
        shadeIntensity: 0.5, // Độ tương phản
        gradientToColors: ['#F6E6E6'], // Màu kết thúc của gradient (đỏ)
        inverseColors: false, // Đảo ngược màu
        opacityFrom: 1, // Độ mờ từ
        opacityTo: 0.8, // Độ mờ đến
        stops: [0, 100] // Điểm dừng
      }
    },
    // plotOptions: {
    //   bar: {
    //     borderRadius: 30 // Độ cong cho các cạnh trên của cột
    //   }
    // }
  });

  const [series] = useState([
    {
      name: "Sinh Viên",
      data: [30, 12, 25, 41, 51, 62]
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
