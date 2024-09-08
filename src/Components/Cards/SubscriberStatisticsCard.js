import React from "react";
import { Line } from "react-chartjs-2";
import { getChartOptions } from "./ChartOptions";

function SubscriberStatisticsCard() {
  const chart = {
    labels: [2, 3, 2, 9, 7, 7, 4],
    datasets: [
      {
        label: "",
        data: [2, 3, 2, 9, 7, 7, 4],

        backgroundColor: "rgba(246, 109, 155, 0.1)",
        borderColor: "rgba(246, 109, 155, 0.8)",
        borderWidth: 2,

        tension: 0.4,
        fill: true,
      },
    ],
  };
  const options = getChartOptions();

  return (
    <div className="w-full h-80 px-2">
      <div className="rounded-lg h-full shadow-sm mb-4">
        <div className="rounded-lg bg-white h-full shadow-lg md:shadow-xl relative overflow-hidden">
          <div className="px-3 pt-8 pb-10 text-center relative z-10">
            <h4 className="text-sm uppercase text-gray-500 leading-tight">
              Subscribers
            </h4>
            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
              11,427
            </h3>
            <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p>
          </div>
          <div className="absolute bottom-0 inset-x-0">
            <Line height={100} type="line" data={chart} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriberStatisticsCard;
