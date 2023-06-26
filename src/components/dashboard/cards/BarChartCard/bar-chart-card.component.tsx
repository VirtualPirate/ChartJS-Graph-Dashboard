import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

const chartOptions = {
  scales: {
    x: {
      display: false,
      grid: {
        display: false, // Disable x-axis gridlines
      },
    },
    y: {
      display: false,
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

  elements: {
    point: {
      radius: 0, // Set the radius to 0 to hide the dots
    },
  },
};

const chartData = {
  labels: [
    "2015-01",
    "2015-02",
    "2015-03",
    "2015-04",
    "2015-05",
    "2015-06",
    "2015-07",
    "2015-08",
  ],
  datasets: [
    {
      label: "Days",
      data: [12, 19, 3, 5, 2, 18, 20, 3],
      backgroundColor: [
        "#f1f5f9",
        "#f1f5f9",
        "#f1f5f9",
        "#f1f5f9",
        "#f1f5f9",
        "#38bdf8",
        "#f1f5f9",
        "#f1f5f9",
      ],
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 5,
    },
  ],
};

interface BarChartCardProps {
  title: string;
  value: string;
  stat: string;
  duration: string;

  barChartData: Array<number>;
}

export default function BarChartCard(props: BarChartCardProps) {
  return (
    <div className=" bg-white rounded-lg p-5 flex flex-col justify-between gap-10">
      <div className="flex justify-between">
        <div className="flex gap-4 w-[100%]">
          <span className={` text-black text-lg font-bold`}>{props.title}</span>
        </div>

        <div className="ml-10 flex items-center gap-1 justify-self-end hover:bg-slate-100 p-2 rounded-full cursor-pointer">
          <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
          <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
          <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <span className={` text-black text-lg font-bold`}>{props.value}</span>
          <span
            className={` text-green-500 text-sm font-semibold p-1 px-4 rounded-lg bg-green-50`}
          >
            {props.stat}%
          </span>
        </div>

        <div className=" text-slate-300 text-sm">{props.duration}</div>
      </div>

      <div className="flex justify-center w-[100%] h-96">
        <Bar
          data={chartData}
          options={chartOptions}
          width={"160"}
          height={"160"}
        />
      </div>
    </div>
  );
}
