import { useState } from "react";
import {
  RiHome4Line,
  RiArrowDownSLine,
  RiPagesLine,
  RiApps2Line,
  RiShoppingCart2Line,
  RiShieldUserLine,
  RiRocket2Line,
  RiLayoutGridLine,
  RiFilePaper2Line,
  RiShoppingBag3Line,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function SideBar({ isOpen }) {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Helper for active state
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`h-full w-64 bg-[#f8f9fa] p-6 border-r border-gray-100 transition-all duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } overflow-y-auto`}
    >
      {/* Branding */}
      <div className="flex items-center space-x-3 mb-8 px-2">
        <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#ede7f6" />
            <path d="M10 14h12v2H10z" fill="#6C47FF" />
            <path
              d="M16 10v12"
              stroke="#6C47FF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="font-bold text-lg text-gray-800 tracking-wide">
          SR dashboard
        </span>
      </div>

      {/* PAGES Section */}
      <div className="text-xs font-bold text-gray-400 px-2 mb-2 mt-4">
        PAGES
      </div>
      <nav className="space-y-1 mb-6">
        {/* Dashboards */}
        <div>
          <button
            onClick={() => handleToggle("dashboards")}
            className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
              isActive("/")
                ? "bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-md"
                : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
            }`}
          >
            <div
              className={`w-9 h-9 flex items-center justify-center rounded-lg mr-3 transition-all duration-300 ${
                isActive("/")
                  ? "bg-white/20"
                  : "bg-purple-100 group-hover:bg-purple-200"
              }`}
            >
              <RiHome4Line
                className={`text-xl ${
                  isActive("/") ? "text-white" : "text-purple-600"
                }`}
              />
            </div>
            <span className="font-medium">Dashboard</span>
            <RiArrowDownSLine
              className={`ml-auto text-lg transition-transform duration-300 ${
                openMenus.dashboards ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`pl-12 overflow-hidden transition-all duration-300 ${
              openMenus.dashboards ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              to="/"
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden text-sm mt-1 ${
                isActive("/")
                  ? "bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 transition-all duration-300 ${
                  isActive("/")
                    ? "bg-white/20"
                    : "bg-purple-100 group-hover:bg-purple-200"
                }`}
              >
                <RiHome4Line
                  className={`text-lg ${
                    isActive("/") ? "text-white" : "text-purple-600"
                  }`}
                />
              </div>
              <span className="font-medium">Home</span>
            </Link>
            <Link
              to="/products"
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden text-sm mt-1 ${
                isActive("/products")
                  ? "bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 transition-all duration-300 ${
                  isActive("/products")
                    ? "bg-white/20"
                    : "bg-purple-100 group-hover:bg-purple-200"
                }`}
              >
                <RiShoppingBag3Line
                  className={`text-lg ${
                    isActive("/products") ? "text-white" : "text-purple-600"
                  }`}
                />
              </div>
              <span className="font-medium">Products</span>
            </Link>
          </div>
        </div>
        {/* Pages */}
        <div>
          <button
            onClick={() => handleToggle("pages")}
            className="flex items-center w-full px-4 py-3 rounded-xl text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg mr-3 bg-purple-100 group-hover:bg-purple-200">
              <RiPagesLine className="text-xl text-purple-600" />
            </div>
            <span className="font-medium">Pages</span>
            <RiArrowDownSLine
              className={`ml-auto text-lg transition-transform duration-300 ${
                openMenus.pages ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`pl-12 overflow-hidden transition-all duration-300 ${
              openMenus.pages ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Profile
            </Link>
            <Link
              to="/pages/settings"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Settings
            </Link>
          </div>
        </div>
        {/* Applications */}
        <div>
          <button
            onClick={() => handleToggle("applications")}
            className="flex items-center w-full px-4 py-3 rounded-xl text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg mr-3 bg-purple-100 group-hover:bg-purple-200">
              <RiApps2Line className="text-xl text-purple-600" />
            </div>
            <span className="font-medium">Applications</span>
            <RiArrowDownSLine
              className={`ml-auto text-lg transition-transform duration-300 ${
                openMenus.applications ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`pl-12 overflow-hidden transition-all duration-300 ${
              openMenus.applications ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              to="/applications/calendar"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Calendar
            </Link>
            <Link
              to="/applications/chat"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Chat
            </Link>
          </div>
        </div>
        {/* Ecommerce */}
        <div>
          <button
            onClick={() => handleToggle("ecommerce")}
            className="flex items-center w-full px-4 py-3 rounded-xl text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg mr-3 bg-purple-100 group-hover:bg-purple-200">
              <RiShoppingCart2Line className="text-xl text-purple-600" />
            </div>
            <span className="font-medium">Ecommerce</span>
            <RiArrowDownSLine
              className={`ml-auto text-lg transition-transform duration-300 ${
                openMenus.ecommerce ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`pl-12 overflow-hidden transition-all duration-300 ${
              openMenus.ecommerce ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              to="/ecommerce/products"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Products
            </Link>
            <Link
              to="/ecommerce/orders"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Orders
            </Link>
          </div>
        </div>
        {/* Authentication */}
        <div>
          <button
            onClick={() => handleToggle("authentication")}
            className="flex items-center w-full px-4 py-3 rounded-xl text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg mr-3 bg-purple-100 group-hover:bg-purple-200">
              <RiShieldUserLine className="text-xl text-purple-600" />
            </div>
            <span className="font-medium">Authentication</span>
            <RiArrowDownSLine
              className={`ml-auto text-lg transition-transform duration-300 ${
                openMenus.authentication ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`pl-12 overflow-hidden transition-all duration-300 ${
              openMenus.authentication ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              to="/login"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* DOCS Section */}
      <div className="text-xs font-bold text-gray-400 px-2 mb-2 mt-6">DOCS</div>
      <nav className="space-y-1">
        {/* Basic */}
        <div>
          <button
            onClick={() => handleToggle("basic")}
            className="flex items-center w-full px-4 py-3 rounded-xl text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg mr-3 bg-purple-100 group-hover:bg-purple-200">
              <RiRocket2Line className="text-xl text-purple-600" />
            </div>
            <span className="font-medium">Basic</span>
            <RiArrowDownSLine
              className={`ml-auto text-lg transition-transform duration-300 ${
                openMenus.basic ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`pl-12 overflow-hidden transition-all duration-300 ${
              openMenus.basic ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              to="/docs/basic/intro"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Introduction
            </Link>
            <Link
              to="/docs/basic/getting-started"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Getting Started
            </Link>
          </div>
        </div>
        {/* Components */}
        <div>
          <button
            onClick={() => handleToggle("components")}
            className="flex items-center w-full px-4 py-3 rounded-xl text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg mr-3 bg-purple-100 group-hover:bg-purple-200">
              <RiLayoutGridLine className="text-xl text-purple-600" />
            </div>
            <span className="font-medium">Components</span>
            <RiArrowDownSLine
              className={`ml-auto text-lg transition-transform duration-300 ${
                openMenus.components ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`pl-12 overflow-hidden transition-all duration-300 ${
              openMenus.components ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              to="/docs/components/buttons"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Buttons
            </Link>
            <Link
              to="/docs/components/cards"
              className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
            >
              Cards
            </Link>
          </div>
        </div>
        {/* Changelog */}
        <Link
          to="/docs/changelog"
          className="flex items-center px-4 py-3 rounded-xl text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="w-9 h-9 flex items-center justify-center rounded-lg mr-3 bg-purple-100 group-hover:bg-purple-200">
            <RiFilePaper2Line className="text-xl text-purple-600" />
          </div>
          <span className="font-medium">Changelog</span>
        </Link>
      </nav>
    </div>
  );
}
export default SideBar;
