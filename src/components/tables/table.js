import {
  FaTrash,
  FaEdit,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useState } from "react";

function Table({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Calculate the current items to display
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="table-body w-full bg-gradient-to-br from-[rgba(75,30,133,0.1)] via-purple-700/10 to-[rgba(75,30,133,0.05)] backdrop-blur-[12px] rounded-[1.5em] border-2 border-[rgba(75,30,133,0.5)] mt-4 overflow-hidden">
      <div className="table-items overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-purple-900/20">
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Image
              </th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Information
              </th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-800/30">
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-purple-900/10 transition-colors duration-200"
              >
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white">
                  {item.id}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg object-cover"
                  />
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white">
                  {item.name}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white">
                  {item.type}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white max-w-[150px] sm:max-w-xs truncate">
                  {item.information}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-center">
                  <div className="flex justify-center gap-2 sm:gap-4 items-center">
                    <button className="p-1.5 sm:p-2 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded-lg transition-all duration-200">
                      <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button className="p-1.5 sm:p-2 text-green-400 hover:text-green-300 hover:bg-green-900/30 rounded-lg transition-all duration-200">
                      <FaEdit className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button className="p-1.5 sm:p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 rounded-lg transition-all duration-200">
                      <FaEye className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container flex justify-center py-4 sm:py-6 border-t border-purple-800/30">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              Next
              <FaChevronRight className="hidden group-hover:inline-block w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel={
            <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <FaChevronLeft className="hidden group-hover:inline-block w-3 h-3 sm:w-4 sm:h-4" />
              Prev
            </span>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex gap-1 sm:gap-2 items-center"
          pageClassName="min-w-[2rem] sm:min-w-[2.5rem] h-8 sm:h-10 flex items-center justify-center rounded-lg border border-purple-800/30 hover:bg-purple-900/30 transition-all duration-200 group"
          pageLinkClassName="text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
          activeClassName="bg-purple-900/50 border-purple-700"
          previousClassName="min-w-[2rem] sm:min-w-[2.5rem] h-8 sm:h-10 flex items-center justify-center rounded-lg border border-purple-800/30 hover:bg-purple-900/30 transition-all duration-200 group"
          nextClassName="min-w-[2rem] sm:min-w-[2.5rem] h-8 sm:h-10 flex items-center justify-center rounded-lg border border-purple-800/30 hover:bg-purple-900/30 transition-all duration-200 group"
          previousLinkClassName="text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
          nextLinkClassName="text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
          disabledClassName="opacity-50 cursor-not-allowed hover:bg-transparent"
          breakClassName="text-white px-2 sm:px-3 text-xs sm:text-sm"
        />
      </div>
    </div>
  );
}
export default Table;
