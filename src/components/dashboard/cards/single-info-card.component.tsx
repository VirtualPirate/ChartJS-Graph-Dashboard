import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);

import {
  minusGraphColor,
  plusGraphColor,
  chartOptions,
} from "./single-info-card.model";

export interface SingleInfoCardProps {
  title: String;
  value: String;
  secondValue: String;
  statInfo: string;

  primaryColor: String;
  secondaryColor: String;

  graphData: Array<Number>;
}

export default function SingleInfoCard(props: SingleInfoCardProps) {
  const charColors =
    parseFloat(props.statInfo) < 0 ? minusGraphColor : plusGraphColor;

  const chartData = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "First dataset",
        data: props.graphData,
        fill: true,
        ...charColors,
        lineTension: 0.4,
      },
    ],
  };

  return (
    <div className=" bg-white rounded-lg p-5 w-96 flex flex-col justify-between gap-10">
      <div className="flex justify-between">
        <div className="flex gap-4 w-[100%]">
          <span className={` text-black text-lg font-bold`}>{props.title}</span>
          <span
            className={` text-green-500 text-sm font-semibold p-1 px-4 rounded-lg bg-green-50 ${props.primaryColor} ${props.secondaryColor}`}
          >
            {props.statInfo}%
          </span>
        </div>

        <div className="ml-10 flex items-center gap-1 justify-self-end hover:bg-slate-100 p-2 rounded-full cursor-pointer">
          <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
          <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
          <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2 flex-col">
          <span className=" text-3xl font-bold text-black">{props.value}</span>
          <span className=" text-slate-400 font-semibold">
            {props.secondValue}
          </span>
        </div>

        <div className="w-1/2 h-20">
          <Line
            data={chartData}
            options={chartOptions}
            width={"60"}
            height={"30"}
          />
        </div>
      </div>
    </div>
  );
}
