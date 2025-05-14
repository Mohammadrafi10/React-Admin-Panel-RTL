import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
function Table({ data }) {
  return (
    <div className="table-body w-full bg-gradient-to-br from-[rgba(75,30,133,0.1)] via-purple-700/10 to-[rgba(75,30,133,0.05)] backdrop-blur-[12px] rounded-[1.5em] border-2 border-[rgba(75,30,133,0.5)] mt-4 overflow-hidden">
      <div className="table-items">
        <table className="w-full">
          <thead>
            <tr className="bg-purple-900/20">
              <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-800/30">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-purple-900/10 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {item.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  <div className="flex justify-center gap-4 items-center">
                    <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded-lg transition-all duration-200">
                      <FaTrash />
                    </button>
                    <button className="p-2 text-green-400 hover:text-green-300 hover:bg-green-900/30 rounded-lg transition-all duration-200">
                      <FaEdit />
                    </button>
                    <button className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 rounded-lg transition-all duration-200">
                      <FaEye />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
