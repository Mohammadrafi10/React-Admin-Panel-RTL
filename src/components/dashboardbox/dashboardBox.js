import { FaLevelUpAlt, FaLevelDownAlt, FaUserPlus } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { MdSubscriptions, MdPendingActions, MdReplay } from "react-icons/md";

function dashboardBox({ title, description, amount, id, percent = "+55%" }) {
  const getIcons = (title) => {
    switch (title.toLowerCase()) {
      case "total revenue":
        return <GiCash size={28} />;
      case "total cost":
        return <FaLevelDownAlt size={28} />;
      case "total profit":
        return <FaLevelUpAlt size={28} />;
      case "new users":
        return <FaUserPlus size={28} />;
      case "active subscriptions":
        return <MdSubscriptions size={28} />;
      case "pending orders":
        return <MdPendingActions size={28} />;
      case "refund requests":
        return <MdReplay size={28} />;
      default:
        return <GiCash size={28} />;
    }
  };
  const getIconGradient = (title) => {
    switch (title.toLowerCase()) {
      case "total revenue":
        return "bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-500";
      case "total cost":
        return "bg-gradient-to-br from-emerald-500 via-teal-400 to-green-400";
      case "total profit":
        return "bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400";
      case "new users":
        return "bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-400";
      case "active subscriptions":
        return "bg-gradient-to-br from-indigo-500 via-blue-400 to-purple-400";
      case "pending orders":
        return "bg-gradient-to-br from-gray-500 via-gray-400 to-gray-300";
      case "refund requests":
        return "bg-gradient-to-br from-red-500 via-pink-400 to-rose-400";
      default:
        return "bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-500";
    }
  };
  const getPercentColor = (id) => {
    switch (id) {
      case 2:
        return "text-red-500";
      default:
        return "text-green-500";
    }
  };

  return (
    <div
      className={
        "flex items-center justify-between w-full  min-h-[90px] bg-white rounded-xl shadow-md p-4 gap-1 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      }
    >
      {/* Left: Text */}
      <div className="flex flex-col justify-center flex-1">
        <span className="text-sm text-gray-500 font-medium mb-1">{title}</span>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-gray-800">{amount}</span>
          <span className={`text-xs font-semibold ${getPercentColor(id)}`}>
            {percent}
          </span>
        </div>
        {description && (
          <span className="text-xs text-gray-400 mt-1">{description}</span>
        )}
      </div>
      {/* Right: Icon */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-lg ${getIconGradient(
          title
        )} text-white shadow-lg`}
      >
        {getIcons(title)}
      </div>
    </div>
  );
}

export default dashboardBox;
