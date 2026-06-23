import axios from 'axios';
import { useEffect, useState } from 'react';
import AddEmployeeForm from './components/AddEmployeeForm';
import EditEmployeeForm from './components/EditEmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDepartment, setEditDepartment] = useState('');
  const [editSalary, setEditSalary] = useState('');

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [editMessage, setEditMessage] = useState('');
  const [editMessageType, setEditMessageType] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortField) {
      return 0;
    }
    if (sortField === 'salary') {
      return sortOrder === 'asc' ? a.salary - b.salary : b.salary - a.salary;
    }
    
    const valueA = a[sortField].toLowerCase();
    const valueB = b[sortField].toLowerCase();
    if (sortOrder === 'asc') {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(
        sortOrder === 'asc' ? 'desc' : 'asc'
      );
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const getSortArrow = (field) => {
    if (sortField !== field) {
      return '↕';
    }
    return sortOrder === 'asc'? '↑': '↓';
  };

  const totalEmployees = employees.length;
  const totalDepartments = new Set(employees.map((employee) => employee.department)).size;
  const highestSalary = employees.length > 0? Math.max(...employees.map((employee) => employee.salary)): 0;
  const averageSalary = employees.length > 0? Math.floor(
      employees.reduce((sum, employee) => sum + employee.salary,0) / employees.length): 0;


  const resetSort = () => {
    setSortField('');
    setSortOrder('asc');
  };

  const fetchEmployees = async () => {

    try {

      const response = await axios.get(
        'http://127.0.0.1:8000/employees'
      );

      setEmployees(response.data);

    } catch (error) {

      console.log("Error fetching employees", error);

    }
  };

  const addEmployee = async () => {
    if (!name || !department || !salary) {
      setMessage("Please fill all fields");
      setMessageType("error");
      return;
    }
    if (Number(salary) <= 0) {
      setMessage("Salary must be greater than 0");
      setMessageType("error");
      return;
    }
    try {

      const newEmployee = {
        name: name,
        department: department,
        salary: Number(salary)
      };

      await axios.post(
        'http://127.0.0.1:8000/employees',
        newEmployee
      );
      setMessage("Employee Added Successfully");
      setMessageType("success");
      setTimeout(() => {
        setMessage('');
      }, 6000);

      fetchEmployees();

      setName('');
      setDepartment('');
      setSalary('');

    } catch (error) {

      console.log("Error adding employee", error);

    }
  };

  const confirmDeleteEmployee = async () => {
    try {
      await axios.delete(
      `http://127.0.0.1:8000/employee/${employeeToDelete}`
      );

      fetchEmployees();
      setShowDeleteModal(false);
      setEmployeeToDelete(null);

    } catch (error) {

        console.log("Error deleting employee", error);
      }
  };
  const openDeleteModal = (id) => {
    setEmployeeToDelete(id);
    setShowDeleteModal(true);
  };

  const editEmployee = (employee) => {
    setEditName(employee.name);
    setEditDepartment(employee.department);
    setEditSalary(employee.salary);
    setEditId(employee.id);
  };

  const updateEmployee = async () => {
    if (!editName || !editDepartment || !editSalary) {
      setEditMessage("Please fill all fields");
      setEditMessageType("error");
      return;
    }
    if (Number(editSalary) <= 0) {
      setEditMessage("Salary must be greater than 0");
      setEditMessageType("error");
      return;
    }
    try {
      const updatedEmployee = {
        name: editName,
        department: editDepartment,
        salary: Number(editSalary)
      };

      await axios.put(
        `http://127.0.0.1:8000/employee/${editId}`,
        updatedEmployee
      );
      setMessage("Employee Details Updated Successfully");
      setMessageType("success");
      setTimeout(() => {
        setMessage('');
      }, 5000);

      fetchEmployees();

      setEditId(null);

      setEditName('');
      setEditDepartment('');
      setEditSalary('');

    } catch (error) {

      console.log("Error updating employee", error);
    }
  };

  const exportToCSV = () => {
    const headers = [
      'ID',
      'Name',
      'Department',
      'Salary'
    ];
    const rows = employees.map((employee) => [
      employee.id,
      employee.name,
      employee.department,
      employee.salary
    ]);
    const csvContent = [
      headers.join(','),...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent],{ type: 'text/csv;charset=utf-8;' });
    
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      'employees.csv'
    );
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <>
    {isLoggedIn ? (
      <Dashboard
        employees={employees}
        name={name}
        setName={setName}
        department={department}
        setDepartment={setDepartment}
        salary={salary}
        setSalary={setSalary}
        addEmployee={addEmployee}
        editId={editId}
        setEditId={setEditId}
        editName={editName}
        setEditName={setEditName}
        editDepartment={editDepartment}
        setEditDepartment={setEditDepartment}
        editSalary={editSalary}
        setEditSalary={setEditSalary}
        editMessage={editMessage}
        editMessageType={editMessageType}
        editEmployee={editEmployee}
        openDeleteModal={openDeleteModal}
        confirmDeleteEmployee={confirmDeleteEmployee}
        updateEmployee={updateEmployee}
        message={message}
        messageType={messageType}
        totalEmployees={totalEmployees}
        totalDepartments={totalDepartments}
        highestSalary={highestSalary}
        averageSalary={averageSalary}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSort={handleSort}
        getSortArrow={getSortArrow}
        resetSort={resetSort}
        exportToCSV={exportToCSV}
        sortedEmployees={sortedEmployees}
        setShowDeleteModal={setShowDeleteModal}
        showDeleteModal={showDeleteModal}
        employeeToDelete={employeeToDelete}
        loggedInUser={loggedInUser}
        handleLogout={() => setIsLoggedIn(false)}
      />
    ) : (
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setLoggedInUser={setLoggedInUser}
      />
    )}

  </>
  );
}

export default App;