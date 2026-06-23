function AddEmployeeForm({
  name,
  setName,
  department,
  setDepartment,
  salary,
  setSalary,
  addEmployee
}) {

  return (

    <div className="bg-white/50 backdrop-blur-2xl border border-white/40 rounded-[36px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 mb-10">

      <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Add Employee
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-white/70 border border-white/40 rounded-2xl px-5 py-4 text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
        />

        <input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full bg-white/70 border border-white/40 rounded-2xl px-5 py-4 text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
        />

        <input
          type="number"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full bg-white/70 border border-white/40 rounded-2xl px-5 py-4 text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
        />

        <button
          onClick={addEmployee}
          className="w-full bg-gradient-to-r from-purple-300 to-purple-500 text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
        >
          Add Employee
        </button>

      </div>

    </div>

  );
}

export default AddEmployeeForm;