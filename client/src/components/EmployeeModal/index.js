import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'

function EmployeeModal(props) {
    const [show, setShow] = useState(false); 

    const employeeIdRef = useRef()
    const nameRef = useRef()
    const positionRef = useRef()
    const phonenumberRef = useRef()
    const emailRef = useRef()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit (event){
      event.preventDefault();
      const newEmployee = {
        employeeId: parseInt(employeeIdRef.current.value),
        name: nameRef.current.value,
        position: positionRef.current.value,
        phonenumber: parseInt(phonenumberRef.current.value),
        email: emailRef.current.value
      }

      console.log(newEmployee)
      API.createEmployee(newEmployee)
        .then( res => {
          console.log(res)
        })
      handleClose()
      props.getEmployees()
    }

    return (
      <>
        <button variant="primary" style={{height: "40px", fontSize: "90%"}} onClick={handleShow}>
          Add An Employee
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontFamily: "monospace", fontSize: "30px"}}>Add an employee:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group text-center">
                <input
                style={{marginTop: "5%"}}
                className="input"
                ref={employeeIdRef}
                type="text"
                placeholder="Employee ID"
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                ref={nameRef}
                type="text"
                placeholder="Employee Name"
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                ref={positionRef}
                type="text"
                placeholder="Position"
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                ref={phonenumberRef}
                type="text"
                placeholder="Phone Number"
                />
              </div>
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                ref={emailRef}
                type="text"
                placeholder="E-Mail"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button variant="primary" style={{margin: "0 auto"}} onClick={handleSubmit}>
              Add Employee
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EmployeeModal;