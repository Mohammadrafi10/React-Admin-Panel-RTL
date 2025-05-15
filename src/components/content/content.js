import DashboardBox from "../dashboardbox/dashboardBox";
import LineChart from "../charts/linecharts/linechart";
import AreaChart from "../charts/areacharts/areachart";
import FunnelChart from "../charts/funnelchart/funnelchart";
import SearchBar from "../searchbar/searchbar";
import Table from "../tables/table";
// Import images
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";

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
  const tableData = [
    {
      id: 1,
      name: "Jacket",
      type: "Blue",
      img: img1,
      information: "Premium quality denim jacket with modern design",
    },
    {
      id: 2,
      name: "Blouse",
      type: "Black",
      img: img2,
      information: "Elegant silk blouse with pearl buttons",
    },
    {
      id: 3,
      name: "Dress",
      type: "Red",
      img: img1,
      information: "Summer floral dress with adjustable straps",
    },
    {
      id: 4,
      name: "Pants",
      type: "Gray",
      img: img2,
      information: "Comfortable cotton pants with elastic waist",
    },
    {
      id: 5,
      name: "Skirt",
      type: "Green",
      img: img1,
      information: "Pleated midi skirt with side pockets",
    },
    {
      id: 6,
      name: "Sweater",
      type: "White",
      img: img2,
      information: "Knit sweater with ribbed cuffs and collar",
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
        {/* search bar */}
        <div className="w-full mt-8">
          <SearchBar
            onSearch={(params) => console.log("Search params:", params)}
          />
        </div>
        <div className="w-full mt-8">
          <Table data={tableData} />
        </div>
      </div>
    </>
  );
}
export default Content;
