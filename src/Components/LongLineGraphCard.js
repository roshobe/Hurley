import React from "react";
import { Line } from "react-chartjs-2";
import { getChartOptions } from "./Cards/ChartOptions";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler
);

const LongLineGraphCard = () => {
  const chart = {
    labels: [2, 3, 2, 9, 7, 7, 4],
    datasets: [
      {
        label: "Cards",
        data: [2, 3, 2, 9, 7, 7, 4],
        backgroundColor: "rgba(75,192,192,0.8)",
        borderColor: "rgba(75,192,192, 0.8)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = getChartOptions();
  return (
    <div className=" rounded-lg shadow-lg dark:bg-gray-800 p-4  ">
      <div className=" bg-slate-700  w-full transform transition duration-300 -translate-y-7  hover:-translate-y-16   hover:shadow-2xl rounded-lg p-4 shadow-2xl ">
        <Line height={200} type="line" data={chart} options={options} />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Office Studio
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          The place is close to Metro Station and bus stop just 2 min by walk
          and near to "Naviglio" where you can enjoy the night life in London,
          UK.
        </p>
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            $1,119/night
          </h1>

          <span className="text-sm text-gray-600 dark:text-gray-400">
            London, UK
          </span>
        </div>
      </div>
    </div>
  );
};

export default LongLineGraphCard;
