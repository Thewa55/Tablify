import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import EmployeeModal from "../EmployeeModal"

function EmployeeList() {
    
  const [employees, setEmployees] = useState([])

  function getEmployees() {
    API.getEmployees()      
      .then(results => {
        setEmployees(results.data)
      })
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getEmployees()
  }, [])

  console.log(employees)
  return(
    <div>
      {employees.length ? (
        <div>
          {employees.map( employee => (
            <ul className="list-group" key={employee._id}>
              <li className="list-group-item">{employee.employeeId}</li>
              <li className="list-group-item">{employee.name}</li>
              <li className="list-group-item">{employee.position}</li>
              <li className="list-group-item">{employee.phonenumber}</li>
              <li className="list-group-item">{employee.email}</li>
            </ul>
          ))}
          <EmployeeModal />
        </div>    
      ) : (
        <div>
            <h1>No current employees in the database, please add some people!</h1>
            <EmployeeModal />
        </div>
      )}
    </div>
  )
}

export default EmployeeList;