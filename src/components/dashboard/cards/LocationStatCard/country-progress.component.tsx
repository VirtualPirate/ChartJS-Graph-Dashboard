interface CountryProgressProps {
  src: string;
  name: string;
  barColor: string;
  percentage: string;
}

export default function CountryProgress(props: CountryProgressProps) {
  return (
    <div className="flex gap-4 w-[100%]">
      <img className="h-8 w-8" src={`./${props.src}`}></img>
      <div className="flex flex-col justify-between w-[100%]">
        <span className="text-xs font-semibold">{props.name}</span>
        <div className="flex items-center gap-2 w-[100%]">
          <div className="w-[100%] rounded-full h-2 bg-slate-300">
            <div
              className={`h-2 rounded-full ${props.barColor}`}
              style={{ width: `${props.percentage}%` }}
            ></div>
          </div>

          <span className="text-xs font-semibold">{props.percentage}%</span>
        </div>
      </div>
    </div>
  );
}
