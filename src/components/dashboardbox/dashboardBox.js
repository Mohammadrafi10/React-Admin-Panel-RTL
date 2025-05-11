import { FaLevelUpAlt } from "react-icons/fa";
import { FaLevelDownAlt } from "react-icons/fa";
import { GiCash } from "react-icons/gi";

function dashboardBox({ title, description, amount, id }) {
  const getIcons = (id) => {
    switch (id) {
      case 1:
        return <FaLevelUpAlt />;
      case 2:
        return <FaLevelDownAlt />;
      default:
        return <GiCash />;
    }
  };
  const getGradientStyle = (id) => {
    switch (id) {
      case 1:
        return "from-[rgba(75,30,133,1)] via-purple-700/80 to-[rgba(75,30,133,0.2)]";
      case 2:
        return "from-[rgba(16,185,129,1)] via-emerald-600/80 to-[rgba(16,185,129,0.2)]";
      case 3:
        return "from-[rgba(245,158,11,1)] via-amber-600/80 to-[rgba(245,158,11,0.2)]";
      default:
        return "from-[rgba(75,30,133,1)] via-purple-700/80 to-[rgba(75,30,133,0.2)]";
    }
  };

  const getHoverGradient = (id) => {
    switch (id) {
      case 1:
        return "from-purple-600/30 via-fuchsia-500/20";
      case 2:
        return "from-emerald-600/30 via-teal-500/20";
      case 3:
        return "from-amber-600/30 via-orange-500/20";
      default:
        return "from-purple-600/30 via-fuchsia-500/20";
    }
  };

  const getButtonStyle = (id) => {
    switch (id) {
      case 1:
        return "border-purple-300/30 hover:border-purple-300/50 hover:shadow-purple-500/20 bg-purple-500/10";
      case 2:
        return "border-emerald-300/30 hover:border-emerald-300/50 hover:shadow-emerald-500/20 bg-emerald-500/10";
      case 3:
        return "border-amber-300/30 hover:border-amber-300/50 hover:shadow-amber-500/20 bg-amber-500/10";
      default:
        return "border-purple-300/30 hover:border-purple-300/50 hover:shadow-purple-500/20 bg-purple-500/10";
    }
  };

  const getButtonGradient = (id) => {
    switch (id) {
      case 1:
        return "from-purple-600/40 via-fuchsia-500/40 to-purple-600/40";
      case 2:
        return "from-emerald-600/40 via-teal-500/40 to-emerald-600/40";
      case 3:
        return "from-amber-600/40 via-orange-500/40 to-amber-600/40";
      default:
        return "from-purple-600/40 via-fuchsia-500/40 to-purple-600/40";
    }
  };

  const getBorderColor = (id) => {
    switch (id) {
      case 1:
        return "border-[rgba(75,30,133,0.5)]";
      case 2:
        return "border-[rgba(16,185,129,0.5)]";
      case 3:
        return "border-[rgba(245,158,11,0.5)]";
      default:
        return "border-[rgba(75,30,133,0.5)]";
    }
  };

  return (
    <div
      className={`box relative h-[18em] w-full border-2 ${getBorderColor(
        id
      )} rounded-[1.5em] bg-gradient-to-br ${getGradientStyle(
        id
      )} text-white font-nunito p-[1.5em] flex justify-center items-left flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group/card hover:-translate-y-1`}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getHoverGradient(
          id
        )} to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]`}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover/card:animate-pulse"></div>

      {/* Status dots */}
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-purple-300/50"></div>
        <div className="w-2 h-2 rounded-full bg-purple-300/30"></div>
        <div className="w-2 h-2 rounded-full bg-purple-300/10"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3">
        {/* Icon and Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-400/20">{getIcons(id)}</div>
          <h1 className="text-[1.8em] font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>

        {/* Value and Trend */}
        <div className="flex items-baseline gap-2">
          <p className="text-[2.2em] font-bold text-white">{amount}</p>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full text-sm bg-green-500/20 text-green-300">
            <span>↑</span>
            <span>20.1%</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[0.9em] text-purple-100/90 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <button
        className={`relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] ${getButtonStyle(
          id
        )} rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn active:scale-95 transition-all duration-300 backdrop-blur-[12px]`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${getButtonGradient(
            id
          )} translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700`}
        ></div>
        <p className="relative z-10 font-medium tracking-wide">View Details</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>

      {/* Decorative element */}
      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover/card:animate-pulse"></div>
    </div>
  );
}

export default dashboardBox;
