interface DeviceProgressStatProps {
  name: string;
  exactCount: string;
  percentage: string;
  barColor: string;
}

export default function DeviceProgressStat(props: DeviceProgressStatProps) {
  return (
    <div className="flex flex-col w-[100%] gap-2">
      <div className="flex justify-between">
        <span className="font-semibold text-sm">{props.name}</span>
        <span className="font-semibold text-sm">
          {props.exactCount} / {props.percentage}%
        </span>
      </div>

      <div className="rounded-full h-2.5 bg-slate-300">
        <div
          className={`bg-green-500 h-2.5 rounded-full ${props.barColor}`}
          style={{ width: `${props.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
