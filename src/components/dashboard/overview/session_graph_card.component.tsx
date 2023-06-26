import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "#e0f2fe",
      borderColor: "#0ea5e9",
      lineTension: 0.4,
    },
  ],
};

const chartOptions = {
  beizerCurve: true,
  elements: {
    point: {
      radius: 0, // Set the radius to 0 to hide the dots
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Disable x-axis gridlines
      },
    },
    y: {
      grid: {
        display: false, // Disable y-axis gridlines
      },
    },
  },

  plugins: {
    legend: {
      display: false, // Disable the entire legend
    },
  },
};

export default function SessionGraphCard() {
  return (
    <div className="col-span-2 flex flex-col gap-6 bg-white p-8 rounded-lg justify-between">
      <div className="flex justify-between">
        <span className="font-bold text-xl">Session Overview</span>
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

      <div className="w-[100%]">
        <Line
          data={chartData}
          options={chartOptions}
          width={"70"}
          height={"30"}
        />
      </div>
    </div>
  );
}
