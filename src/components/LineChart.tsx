import React from "react";
import ReactEcharts from "echarts-for-react";

interface ChartProps {
  data: any[];
  title: string;
}

const LineChart: React.FC<ChartProps> = ({ data, title }) => {
  const chartData = data.map((item) => [item.Flavanoids, item.Ash]);
  const option = {
    title: {
      text: title,
    },
    xAxis: {
      type: "value",
      name: "Flavanoids",
    },
    yAxis: {
      type: "value",
      name: "Ash",
    },
    series: [
      {
        data: chartData,
        type: "line",
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={{ height: "500px", width: "100%" }} />
  );
};

export default LineChart;
