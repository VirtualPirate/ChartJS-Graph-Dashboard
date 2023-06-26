import CountryProgress from "./country-progress.component";

import { WorldMap } from "../../world-map/world-map.component";

const countryStats = [
  {
    src: "united-states.png",
    name: "United States",
    barColor: "bg-green-500",
    percentage: "45",
  },
  {
    src: "united-kingdom.png",
    name: "United Kingdom",
    barColor: "bg-blue-500",
    percentage: "35",
  },
  {
    src: "india.png",
    name: "India",
    barColor: "bg-orange-500",
    percentage: "20",
  },
  {
    src: "poland.png",
    name: "Indonesia",
    barColor: "bg-red-500",
    percentage: "20",
  },
];

export default function LocationStatCard() {
  return (
    <div
      className="flex flex-col gap-10 bg-white p-8 rounded-lg"
      style={{
        gridColumn: "span 1.5 / span 1.5",
      }}
    >
      <div className="flex justify-between">
        <span className="font-bold text-xl">Top Location For Audience</span>
        <div className="flex gap-4">
          <select
            name="platform"
            className="bg-white p-2 rounded-md border border-slate-300 text-slate-500"
          >
            <option className=" text-slate-500" value="weekly">
              Top Countries
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
        <div className="w-[50%] h-40 overflow-hidden 2xl:h-60">
          <WorldMap />
        </div>
        <div className="flex flex-col gap-4 w-[40%] ">
          {countryStats.map((stat) => (
            <CountryProgress {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
