import React from "react";
import ReactEcharts from "echarts-for-react";

interface ChartProps {
  data: any[];
  title: string;
}

const BarChart: React.FC<ChartProps> = ({ data, title }) => {
  // Group the data by alcohol category and find the minimum magnesium value for each category
  const chartData = data.reduce((result, item) => {
    const alcoholCategory = item.Alcohol;
    const magnesiumValue = item.Magnesium;

    if (!result[alcoholCategory] || magnesiumValue < result[alcoholCategory]) {
      result[alcoholCategory] = magnesiumValue;
    }

    return result;
  }, {});

  // Convert the chart data to an array of arrays for ECharts
  const chartDataArray = Object.entries(chartData);

  const option = {
    title: {
      text: title,
    },
    xAxis: {
      type: "category",
      data: Object.keys(chartData),
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium",
    },
    series: [
      {
        data: chartDataArray,
        type: "bar",
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: "500px" }} />;
};

export default BarChart;
