import DashboardBox from "../dashboardbox/dashboardBox";

function Content() {
  const dashboardData = [
    {
      id: 1,
      title: "total cost",
      description: "total cost of all sales and subscriptions this month",
      amount: "$45,231",
    },
    {
      id: 2,
      title: "total revenue",
      description:
        "total revenue generated from all sales and subscriptions this month",
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
      </div>
    </>
  );
}
export default Content;
