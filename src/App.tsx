import BarChartCard from "./components/dashboard/cards/BarChartCard/bar-chart-card.component";
import DeviceSessionStatCard from "./components/dashboard/cards/DeviceSessionStatCard/device-session-stat-card.component";
import LocationStatCard from "./components/dashboard/cards/LocationStatCard/location-stat-card.component";
import SingleInfoCard, {
  SingleInfoCardProps,
} from "./components/dashboard/cards/SingleInfoCard/single-info-card.component";
import SessionGraphCard from "./components/dashboard/overview/session_graph_card.component";

interface InfoCardArray extends Array<SingleInfoCardProps> {}

const infos: InfoCardArray = [
  {
    title: "Total Revenue",
    value: "$56,472",
    secondValue: "480 Orders",
    statInfo: "+15",
    primaryColor: "text-green-500",
    secondaryColor: "bg-green-50",
    graphData: [0, 30, 10, 30, 40],
  },
  {
    title: "Conversations",
    value: "372",
    secondValue: "214 Clicks",
    statInfo: "-0.72",
    primaryColor: "text-red-500",
    secondaryColor: "bg-red-50",
    graphData: [40, 30, 10, 30, 0],
  },
  {
    title: "Subscribers",
    value: "2,873",
    secondValue: "$62 Lifetime Value",
    statInfo: "+10.4",
    primaryColor: "text-green-500",
    secondaryColor: "bg-green-50",
    graphData: [0, 30, 10, 30, 40],
  },
];

function App() {
  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {infos.map((info) => {
        return <SingleInfoCard {...info} />;
      })}

      <SessionGraphCard />
      <BarChartCard
        title="Most Active Users"
        value="+1.684"
        stat="+12"
        duration="Last 3 Years"
        barChartData={[]}
      />

      <div className="col-span-3 grid grid-cols-2 gap-4">
        <LocationStatCard />
        <DeviceSessionStatCard />
      </div>
    </div>
  );
}

export default App;
