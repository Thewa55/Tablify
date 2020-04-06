import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import EmployeeModal from "../EmployeeModal"
import EmployEditModal from "../EmployeeEditModal"
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function EmployeeList() {
  const [employees, setEmployees] = useState([])

  function getEmployees() {
    API.getEmployees()      
      .then(results => {
        setEmployees(results.data)
      })
      .catch(err => console.log(err))
  }
  
  function removeEmployee(id){
    API.removeEmployee(id)
      .then(results =>{
        getEmployees()
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
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Postion</th>
                <th>Phone Number</th>
                <th>E-mail</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             {employees.map( employee => (
                <tr>
                  <td>{employee.employeeId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.phonenumber}</td>
                  <td>{employee.email}</td>
                  <td><Button variant="danger" onClick={() => removeEmployee(employee._id)}>Remove</Button>{' '}
                      <EmployEditModal employee={employee} getEmployees={getEmployees}/></td>
                </tr>

           ))}
              </tbody>
            </Table>
          <div>
            <EmployeeModal getEmployees={getEmployees} />
          </div>
        </div>    
      ) : (
        <div>
            <h1>No current employees in the database, please add some people!</h1>
            <EmployeeModal getEmployees={getEmployees}/>
        </div>
      )}
    </div>
  )
}

export default EmployeeList;