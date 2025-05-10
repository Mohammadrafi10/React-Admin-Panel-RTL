import Navbar from "../../components/navbar/navbar";
import SideBar from "../../components/sidebar/sidebar";
import Content from "../../components/content/content";
import { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function sidebarHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-lg transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar isOpen={isOpen} />
        </div>

        {/* Main Content Area */}
        <div
          className={`transition-all duration-300 ${
            isOpen ? "ml-64" : "ml-0"
          } w-full`}
        >
          <Navbar sidebarHandler={sidebarHandler} isOpen={isOpen} />
          <div className="mt-16 p-6">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
