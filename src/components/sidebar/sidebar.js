import { useState } from "react";
import {
  RiHome4Line,
  RiShoppingBag3Line,
  RiFileList3Line,
  RiMessage2Line,
  RiNotification3Line,
  RiSettings4Line,
  RiArrowDownSLine,
} from "react-icons/ri";

function SideBar({ isOpen }) {
  let [subMenuOpen, setSubMenuOpen] = useState(false);

  function toggleSubMenu() {
    setSubMenuOpen(!subMenuOpen);
  }

  return (
    <div
      className={`h-full w-64 bg-white p-6 border-r border-gray-100 transition-all duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mb-10">
        <div className="relative p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 mb-3 group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-center space-x-3 relative">
            <div className="w-10 h-10 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <span className="text-purple-600 text-lg">🎯</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
          </div>
        </div>
      </div>

      <nav className="space-y-1">
        <div className="relative">
          <button
            onClick={toggleSubMenu}
            className="w-full flex items-center justify-between px-4 py-3.5 text-gray-600 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex items-center">
              <div className="absolute left-0 top-0 w-1 h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <RiHome4Line className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                Home
              </span>
            </div>
            <RiArrowDownSLine
              className={`text-xl transition-transform duration-300 ${
                subMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`submenu-wrapper overflow-hidden transition-all duration-300 ${
              subMenuOpen ? "max-h-48" : "max-h-0"
            }`}
          >
            <div className="pl-12 space-y-1 mt-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
              >
                Lists
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
              >
                Orders
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
              >
                Chats
              </a>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="flex items-center px-4 py-3.5 text-gray-600 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-1 h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          <RiShoppingBag3Line className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
            Products
          </span>
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-3.5 text-gray-600 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-1 h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          <RiFileList3Line className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
            Orders
          </span>
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-3.5 text-gray-600 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-1 h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          <RiMessage2Line className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
            Messages
          </span>
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-3.5 text-gray-600 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-1 h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          <RiNotification3Line className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
            Notifications
          </span>
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-3.5 text-gray-600 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-1 h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
          <RiSettings4Line className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
            Settings
          </span>
        </a>
      </nav>
    </div>
  );
}
export default SideBar;
