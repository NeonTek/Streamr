import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

import { dummyData } from "../test-data/test";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Analytics = () => {
  const viewerData = {
    labels: dummyData.days,
    datasets: [
      {
        label: "Viewer Count",
        data: dummyData.viewers,
        backgroundColor: "rgba(54,162,235,0.6)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
      },
    ],
  };

  const viewerOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Viewer Engagement Over the Week",
      },
    },
  };

  const likeData = {
    labels: dummyData.days,
    datasets: [
      {
        label: "Likes",
        data: dummyData.likes,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };

  const likeOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Likes Trend Over Time",
      },
    },
  };

  const commentData = {
    label: dummyData.days,
    datasets: [
      {
        label: "Comments",
        data: dummyData.comments,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(141, 99, 255, 0.6)",
          "rgba(99, 255, 255, 0.6)",
          "rgba(99, 255, 195, 0.6)",
          "rgba(226, 255, 99, 0.6)",
          "rgba(70, 5, 175, 0.6)",
          "rgba(4, 87, 11, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(141, 99, 255, 1)",
          "rgba(99, 255, 255, 1)",
          "rgba(99, 255, 195, 1)",
          "rgba(226, 255, 99, 1)",
          "rgba(70, 5, 175, 1)",
          "rgba(4, 87, 11, 1)",
        ],
        boederWidth: 1,
      },
    ],
  };

  const commentOptions = {
    responsive: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Comments Distribution of the Week",
      },
    },
  };

  return (
    <div className="container">
      <div className="title-container">
        <h2>Analytics Dashboard</h2>
      </div>
      <div>
        <Bar data={viewerData} options={viewerOptions} />
        <Line data={likeData} options={likeOptions} />
        <Pie data={commentData} options={commentOptions} />
      </div>
    </div>
  );
};

export default Analytics;
