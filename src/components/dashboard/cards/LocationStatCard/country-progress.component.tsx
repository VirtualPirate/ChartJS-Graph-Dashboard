interface CountryProgressProps {
  src: string;
  name: string;
  barColor: string;
  percentage: string;
}

export default function CountryProgress(props: CountryProgressProps) {
  return (
    <div className="flex gap-4">
      <img className="h-10 w-10" src={`./${props.src}`}></img>
      <div className="flex flex-col justify-between">
        <span className="text-sm font-semibold">{props.name}</span>
        <div className="flex items-center gap-2">
          <div className="w-40 rounded-full h-2.5 bg-slate-300">
            <div
              className={`bg-green-500 h-2.5 rounded-full ${props.barColor}`}
              style={{ width: `${props.percentage}%` }}
            ></div>
          </div>

          <span className="text-sm">{props.percentage}%</span>
        </div>
      </div>
    </div>
  );
}
