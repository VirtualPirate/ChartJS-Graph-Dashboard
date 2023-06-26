import DeviceProgressStat from "./device-progress-stat.component";

const deviceStats = [
  {
    name: "Desktop",
    exactCount: "4,089",
    percentage: "76",
    barColor: "bg-green-500",
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

      <div className="flex justify-between">
        <div></div>
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
