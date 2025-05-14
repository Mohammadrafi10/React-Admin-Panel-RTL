import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("all");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      // If search is empty, show all data
      onSearch({
        searchTerm: "",
        searchField: "all",
      });
      return;
    }

    onSearch({
      searchTerm: searchTerm.trim(),
      searchField,
    });
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearchField("all");
    onSearch({
      searchTerm: "",
      searchField: "all",
    });
  };

  return (
    <div className="w-full rounded-[1.5em] border-2 border-[rgba(75,30,133,0.5)] bg-gradient-to-br from-[rgba(75,30,133,0.1)] via-purple-700/10 to-[rgba(75,30,133,0.05)] backdrop-blur-[12px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by name or type..."
            className="w-full px-4 py-3 pl-10 text-sm text-black bg-purple-200 border border-[rgba(75,30,133,0.3)] rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 placeholder-gray-400"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Search Field Select */}
        <div className="relative">
          <select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="w-full px-4 py-3 text-sm text-black bg-purple-200 border border-[rgba(75,30,133,0.3)] rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 appearance-none"
          >
            <option value="all">All Fields</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Search Buttons */}
      <div className="px-6 pb-6 flex justify-end gap-4">
        <button
          onClick={handleClear}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 flex items-center space-x-2"
        >
          <span>Clear</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition-all duration-200 flex items-center space-x-2"
        >
          <span>Search</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
