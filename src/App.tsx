import BarChartCard from "./components/dashboard/cards/BarChartCard/bar-chart-card.component";
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
    <div
      className="grid grid-cols-3 gap-4 p-10"
      // "flex flex-col gap-8 p-10"
    >
      {/* <div className="flex gap-6"> */}
      {infos.map((info) => {
        return <SingleInfoCard {...info} />;
      })}
      {/* </div> */}

      <SessionGraphCard />
      <BarChartCard
        title="Most Active Users"
        value="+1.684"
        stat="+12"
        duration="Last 3 Years"
        barChartData={[]}
      />
    </div>
  );
}

export default App;
