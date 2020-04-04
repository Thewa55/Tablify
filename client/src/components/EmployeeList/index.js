import React, { useEffect, useState } from "react";
import API from "../../utils/API";

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

  return(
    <div>
      {employees.length ? (
        <div>
          {employees.map( employee => (
            <ul class="list-group">
              <li className="list-group-item">{employee._id}</li>
              <li className="list-group-item">{employee.name}</li>
              <li className="list-group-item">{employee.position}</li>
              <li className="list-group-item">{employee.phonenumber}</li>
              <li className="list-group-item">{employee.email}</li>
            </ul>
          ))}
        </div>    
      ) : (
        <div>
            <h1>No current employees in the database, please add some people!</h1>
        </div>
      )}
    </div>
  )
}

export default EmployeeList;