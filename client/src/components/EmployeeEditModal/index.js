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
        setEmployee({ [name]: value})
        // setId(event.target.value)
    }

    function handleSubmit (event){
    //   event.preventDefault();
    //   const newEmployee = {
    //     employeeId: parseInt(employeeIdRef.current.value),
    //     name: nameRef.current.value,
    //     position: positionRef.current.value,
    //     phonenumber: parseInt(phonenumberRef.current.value),
    //     email: emailRef.current.value
    //   }

    //   console.log(newEmployee)

    //   handleClose(employeeIdRef.current.value)
    }

    const employeeInfo = Object.values(employee)
    console.log("employeeInfo: ", employeeInfo)

    return (
      <>
        <Button variant="primary" className="mt-4" onClick={handleShow}>
          Edit {employee.name}
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
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                type="text"
                name="phonenumber"
                value={employee.phonenumber}
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                type="text"
                name="email"
                value={employee.email}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Update Employee
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EmployeeModal;