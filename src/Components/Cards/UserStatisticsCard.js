import React from "react";
import { Line } from "react-chartjs-2";
import { getChartOptions } from "./ChartOptions"; // Ensure the correct path

function UserStatisticsCard() {
  const chart = {
    labels: [1, 2, 1, 3, 5, 4, 7],
    datasets: [
      {
        label: "",
        data: [1, 2, 1, 3, 5, 4, 7],
        backgroundColor: "rgba(101, 116, 205, 0.1)",
        borderColor: "rgba(101, 116, 205, 0.8)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = getChartOptions();

  return (
    <div className=" w-full px-2">
      <div className="rounded-lg shadow-sm mb-4">
        <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
          <div className="px-3 pt-8 pb-10 text-center relative z-10">
            <h4 className="text-sm uppercase text-gray-500 leading-tight">
              Users
            </h4>
            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
              3,682
            </h3>
            <p className="text-xs text-green-500 leading-tight">▲ 57.1%</p>
          </div>
          <div className="absolute bottom-0 inset-x-0">
            <Line height={100} type="line" data={chart} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatisticsCard;
