import DashboardBox from "../dashboardbox/dashboardBox";
import LineChart from "../charts/linecharts/linechart";
import AreaChart from "../charts/areacharts/areachart";
import FunnelChart from "../charts/funnelchart/funnelchart";

function Content() {
  const dashboardData = [
    {
      id: 1,
      title: "total revenue",
      description: "total revenue of all sales and subscriptions this month",
      amount: "$45,231",
    },
    {
      id: 2,
      title: "total cost",
      description:
        "total cost generated from all sales and subscriptions this month",
      amount: "$20,400",
    },
    {
      id: 3,
      title: "total profit",
      description:
        "total profit generated from all sales and subscriptions this month",
      amount: "$24,831",
    },
  ];
  return (
    <>
      <div className="mainContent w-full px-6 py-8">
        <div className="mainContent-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dashboardData.map((datas) => (
            <DashboardBox key={datas.id} {...datas} />
          ))}
        </div>
        <div className="mainchart w-full mt-8 rounded-[1.5em] border-2 border-[rgba(75,30,133,0.5)] bg-gradient-to-br from-[rgba(75,30,133,0.1)] via-purple-700/10 to-[rgba(75,30,133,0.05)] backdrop-blur-[12px]">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Monthly Overview
            </h2>
            <LineChart />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="w-full rounded-[1.5em] border-2 border-[rgba(75,30,133,0.5)] bg-gradient-to-br from-[rgba(75,30,133,0.1)] via-purple-700/10 to-[rgba(75,30,133,0.05)] backdrop-blur-[12px]">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Sales & Revenue Overview
              </h2>
              <AreaChart />
            </div>
          </div>
          <div className="w-full rounded-[1.5em] border-2 border-[rgba(75,30,133,0.5)] bg-gradient-to-br from-[rgba(75,30,133,0.1)] via-purple-700/10 to-[rgba(75,30,133,0.05)] backdrop-blur-[12px]">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Conversion Funnel
              </h2>
              <FunnelChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
