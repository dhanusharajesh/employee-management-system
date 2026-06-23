function EditEmployeeForm({
  editId,
  editName,
  setEditName,
  editDepartment,
  setEditDepartment,
  editSalary,
  setEditSalary,
  updateEmployee,
  setEditId,
  editMessage,
  editMessageType
}) {

  if (editId === null) {
    return null;
  }

  return (

    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white w-[500px] rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-black mb-6">
          Edit Employee
        </h2>
        {editMessage && (
            <div className={`px-4 py-3 w-full mb-4 text-white font-semibold
                ${editMessageType === 'error'? 'bg-red-500':'bg-green-500'
                }`}
            >
            {editMessage}
            </div>
        )}

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Enter Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Enter Department"
            value={editDepartment}
            onChange={(e) => setEditDepartment(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Enter Salary"
            value={editSalary}
            onChange={(e) => setEditSalary(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-end gap-4 mt-4">

            <button
              onClick={updateEmployee}
              className="bg-gradient-to-r from-purple-300 to-purple-500 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Update
            </button>

            <button
              onClick={() => setEditId(null)}
              className="bg-gray-300 text-black px-6 py-3 rounded-xl hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>

        </div>

      </div>

    </div>

  );
}

export default EditEmployeeForm;