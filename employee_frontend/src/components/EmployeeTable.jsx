function EmployeeTable({
  employees,
  editEmployee,
  deleteEmployee
}) {

  return (
    <div className="bg-white/50 backdrop-blur-2xl border border-white/40 rounded-[36px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-x-auto p-4">
    <table className="w-[98%] mx-auto table-fixed border-separate border-spacing-y-2 border-spacing-x-0">
      <thead>
        <tr className="bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 text-slate-700">
          <th className="text-center px-4 py-4 font-bold rounded-l-2xl w-[20%]">ID</th>
          <th className="text-center px-4 py-4 font-bold w-[20%]">Employee</th>
          <th className="text-center px-4 py-4 font-bold w-[20%]">Department</th>
          <th className="text-center px-4 py-4 font-bold w-[15%]">Salary</th>
          <th className="text-center px-4 py-4 font-bold rounded-r-2xl w-[20%]">Actions</th>
        </tr>
      </thead>

      <tbody>

        {employees.map((employee) => (

          <tr key={employee.id} className="hover:bg-white/90 hover:shadow-md transition-all duration-300 shadow-sm rounded-xl">

            <td className="px-4 py-4 text-slate-700 font-medium text-center border-r border-slate-400/60">{employee.id}</td>
            <td className="px-4 py-4 text-slate-700 font-medium text-center border-r border-slate-400/60"><div className="font-semibold text-slate-900">{employee.name}</div></td>
            <td className="px-4 py-4 text-slate-700 font-medium text-center border-r border-slate-400/60">{employee.department}</td>
            <td className="px-4 py-4 text-slate-700 font-medium text-center border-r border-slate-400/60">{employee.salary}</td>
            <td className="px-4 py-4 text-slate-700 font-medium text-center">
              <div className="flex justify-center items-center gap-3">
              <button onClick={() => editEmployee(employee)}
              className="bg-gradient-to-r from-purple-300 to-purple-500 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition text-center">
                Edit
              </button>
              <button onClick={() => deleteEmployee(employee.id)}
              className="bg-slate-900 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition text-center">
                Delete
              </button>
              </div>
            </td>
          </tr>

        ))}

      </tbody>

    </table>
    </div>

  );
}

export default EmployeeTable;