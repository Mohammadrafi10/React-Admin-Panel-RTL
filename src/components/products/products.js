import { useState } from "react";
import SideBar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";

function Products() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-lg transition-all duration-300 z-40 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar isOpen={isSidebarOpen} />
        </div>

        {/* Main Content Area */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "lg:ml-64" : "ml-0"
          }`}
        >
          <Navbar isOpen={isSidebarOpen} sidebarHandler={toggleSidebar} />
          <div className="mt-16 p-6">
            <div className="bg-white rounded-[1.5em] shadow-lg border border-gray-200 p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Products
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sample Product Cards */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Product 1
                  </h3>
                  <p className="text-gray-600 mt-2">Description of product 1</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Product 2
                  </h3>
                  <p className="text-gray-600 mt-2">Description of product 2</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Product 3
                  </h3>
                  <p className="text-gray-600 mt-2">Description of product 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

export default Products;
