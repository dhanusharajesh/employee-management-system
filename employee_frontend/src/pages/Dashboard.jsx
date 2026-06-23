import AddEmployeeForm from "../components/AddEmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import EditEmployeeForm from "../components/EditEmployeeForm";

export default function Dashboard({
    name,
    setName,
    department,
    setDepartment,
    salary,
    setSalary,
    addEmployee,
    editId,
    setEditId,
    editName,
    setEditName,
    editDepartment,
    setEditDepartment,
    editSalary,
    setEditSalary,
    editMessage,
    editMessageType,  
    editEmployee,
    openDeleteModal,
    confirmDeleteEmployee,
    updateEmployee,
    message,
    messageType,
    totalEmployees,
    totalDepartments,
    highestSalary,
    averageSalary,
    searchTerm,
    setSearchTerm,
    handleSort,
    getSortArrow,
    resetSort,
    exportToCSV,
    sortedEmployees,
    setShowDeleteModal,
    showDeleteModal,
    employeeToDelete,
    loggedInUser,
    handleLogout
}) {
    return (

    <>
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-80 to-purple-200 p-4 md:p-8">
          <div className="flex items-center justify-between bg-white/50 backdrop-blur-2xl border border-white/40 rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-8 py-5 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-xl shadow-lg">
                H
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-800">HEXAWARE</h2>
              </div>
            </div>
    
            <div className="hidden md:flex flex-col items-center">
              <h2 className="text-2xl font-bold text-slate-800">Welcome {loggedInUser}!</h2>
            </div>
    
            <button onClick={handleLogout} className="bg-slate-900 text-white px-6 py-3 rounded-2xl shadow hover:scale-[1.03] transition-all duration-300">
              Logout
            </button>
          </div>
    
          <h2 className="text-5xl leading-normal text-center md:text-7xl font-black leading-tight mb-6 text-slate-900">
            <span className="block bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Employee Management System</span>
          </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/60 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 p-8 hover:scale-[1.03] transition-all duration-300">
              <h3 className="text-gray-500 text-lg mb-2"> Total Employees </h3>
              <p className="text-5xl md:text-5xl font-bold text-blue-600">{totalEmployees}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 p-8 hover:scale-[1.03] transition-all duration-300">
              <h3 className="text-gray-500 text-lg mb-2">Total Departments</h3>
              <p className="text-5xl md:text-5xl font-bold text-green-600">{totalDepartments}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 p-8 hover:scale-[1.03] transition-all duration-300">
              <h3 className="text-gray-500 text-lg mb-2">Highest Salary</h3>
              <p className="text-5xl md:text-5xl font-bold text-orange-500">₹{highestSalary}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 p-8 hover:scale-[1.03] transition-all duration-300">
              <h3 className="text-gray-500 text-lg mb-2">Average Salary</h3>
              <p className="text-5xl md:text-5xl font-bold text-purple-600">₹{averageSalary}</p>
            </div>
          </div>
    
          {message && (
            <div className={`px-6 py-3 mb-6 text-center w-full shadow-md w-fit text-white font-bold
                ${messageType === 'success' ? 'bg-green-500': 'bg-red-500'}`}>
                  {message}
            </div>
          )}
    
          <AddEmployeeForm
            name={name}
            setName={setName}
            department={department}
            setDepartment={setDepartment}
            salary={salary}
            setSalary={setSalary}
            addEmployee={addEmployee}
          />
    
          <EditEmployeeForm
            editId={editId}
            editName={editName}
            setEditName={setEditName}
            editDepartment={editDepartment}
            setEditDepartment={setEditDepartment}
            editSalary={editSalary}
            setEditSalary={setEditSalary}
            updateEmployee={updateEmployee}
            setEditId={setEditId}
            editMessage={editMessage}
            editMessageType={editMessageType}
          />
    
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6 mb-8">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              <div className="flex-1">
                <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/70 border border-white/40 rounded-2xl px-6 py-4 text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => handleSort('name')}
                className="bg-white/80 hover:bg-white text-slate-700 px-5 py-3 rounded-2xl shadow-sm transition font-semibold">
                  Name {getSortArrow('name')}
                </button>
    
                <button onClick={() => handleSort('department')}
                className="bg-white/80 hover:bg-white text-slate-700 px-5 py-3 rounded-2xl shadow-sm transition font-semibold">
                  Department {getSortArrow('department')}
                </button>
    
                <button onClick={() => handleSort('salary')}
                className="bg-white/80 hover:bg-white text-slate-700 px-5 py-3 rounded-2xl shadow-sm transition font-semibold">
                  Salary {getSortArrow('salary')}
                </button>
    
                <button onClick={resetSort}
                className="bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-sm hover:scale-[1.03] transition">
                  Reset
                </button>
    
                <button onClick={exportToCSV}
                className="bg-gradient-to-r from-purple-300 to-purple-500 text-white px-5 py-3 rounded-2xl shadow-lg hover:scale-[1.03] transition font-semibold">
                  Export CSV
                </button>
              </div>
            </div>
          </div>
    
          <EmployeeTable
            employees={sortedEmployees}
            editEmployee={editEmployee}
            deleteEmployee={openDeleteModal}
          />
    
          {showDeleteModal && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px]">
                <h2 className="text-2xl font-bold text-black mb-4"> Confirm Delete </h2>
                <p className="text-gray-600 mb-6"> Are you sure you want to delete this employee? </p>
                <div className="flex justify-end gap-4">
                  <button onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-300 text-black px-5 py-2 rounded-xl hover:bg-gray-400 transition">
                    Cancel
                  </button>
                  <button onClick={confirmDeleteEmployee}
                  className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
    </>

  );
}
