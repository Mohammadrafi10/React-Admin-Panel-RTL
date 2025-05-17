import { useState } from "react";
import SideBar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";

function Profile() {
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
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar and Basic Info */}
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                  <p className="text-gray-600 mb-2">Software Engineer</p>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mt-2">
                    Edit Profile
                  </button>
                </div>
                {/* Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      About
                    </h3>
                    <p className="text-gray-600">
                      Passionate software engineer with expertise in web
                      development and user experience design. Always eager to
                      learn new technologies and solve complex problems.
                      Specializing in React, Node.js, and cloud architecture.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Contact
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-600">
                      <span>Email: john.doe@example.com</span>
                      <span>Phone: +1 (555) 123-4567</span>
                      <span>Location: San Francisco, CA</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "JavaScript",
                        "TypeScript",
                        "Node.js",
                        "Python",
                        "AWS",
                        "Docker",
                        "GraphQL",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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

export default Profile;
