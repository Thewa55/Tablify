import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'
// import EmployeeContext from '../../utils/EmployeeContext'

function EmployeeModal(props) {
    const [show, setShow] = useState(false); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const [employee, setEmployee] = useState({
      _id: props.employee._id,
      employeeId: props.employee.employeeId,
      name: props.employee.name,
      position: props.employee.position,
      phonenumber: props.employee.phonenumber,
      email: props.employee.email
    })

    function handleInputChange(event){
        const { name, value } = event.target
        setEmployee({...employee, [name]: value})
        // setId(event.target.value)
    }

    function handleSubmit (id, employee){
        API.changeEmployeeInfo(id, employee)
          .then(result =>{
          handleClose()
          props.getEmployees()
        })
    }

    console.log("employeeInfo: ", employee)

    return (
      <>
        <Button variant="primary" className="mt-0" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group text-center">
                <input
                style={{marginTop: "5%"}}
                className="input"
                type="text"
                name= "employeeId"
                value={employee.employeeId}
                onChange={handleInputChange}
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                type="text"
                name="name"
                value={employee.name}
                onChange={handleInputChange}
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                type="text"
                name="position"
                value={employee.position}
                onChange={handleInputChange}               
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                type="text"
                name="phonenumber"
                value={employee.phonenumber}
                onChange={handleInputChange}
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                type="text"
                name="email"
                value={employee.email}
                onChange={handleInputChange}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleSubmit(employee._id, employee)}>
              Update Employee
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EmployeeModal;