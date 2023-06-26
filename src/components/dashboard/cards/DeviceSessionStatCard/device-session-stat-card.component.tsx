import DeviceProgressStat from "./device-progress-stat.component";

import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(...registerables);

const chartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [76, 21, 3],
      backgroundColor: ["#3b82f6", "#f87171", "#fb923c"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const chartOptions = {
  cutout: "80%",
  plugins: {
    legend: {
      display: false, // Disable the entire legend
    },
  },
};

const deviceStats = [
  {
    name: "Desktop",
    exactCount: "4,089",
    percentage: "76",
    barColor: "bg-blue-500",
  },

  {
    name: "Mobile",
    exactCount: "1,149",
    percentage: "21",
    barColor: "bg-red-500",
  },

  {
    name: "Tablet",
    exactCount: "150",
    percentage: "3",
    barColor: "bg-orange-400",
  },
];

export default function DeviceSessionStatCard() {
  return (
    <div className="flex flex-col gap-6 bg-white p-8 rounded-lg">
      <div className="flex justify-between">
        <span className="font-bold text-xl">Sessions by Device</span>
        <div className="flex gap-4">
          <select
            name="platform"
            className="bg-white p-2 rounded-md border border-slate-300 text-slate-500"
          >
            <option className=" text-slate-500" value="weekly">
              Last 7 days
            </option>
            <option className=" text-slate-500" value="monthly">
              Last Month
            </option>
            <option className=" text-slate-500" value="yearly">
              Last Year
            </option>
          </select>

          <div className="ml-10 flex items-center gap-1 justify-self-end hover:bg-slate-100 p-2 rounded-full cursor-pointer">
            <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
            <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
            <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex justify-center items-center w-[40%] relative">
          <Doughnut data={chartData} options={chartOptions} />
          <div
            className=" absolute top-[50%] left-[50%] flex flex-col items-center"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <span>Total</span>
            <span className="text-3xl font-bold">5,338</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[50%]">
          {deviceStats.map((stat) => (
            <DeviceProgressStat {...stat} />
          ))}

          <div className="text-slate-400 text-sm mt-2">
            Your session has increased in the last 7 days especially on Desktop
            and Mobile
          </div>
        </div>
      </div>
    </div>
  );
}
