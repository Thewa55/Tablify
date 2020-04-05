import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'

function EmployeeModal() {
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
        employeeId: 1234,
        name: "Test",
        position: "position",
        phonenumber: 12345,
        email: "email"
        // employeeId: parseInt(employeeIdRef.current.value),
        // name: nameRef.current.value,
        // position: positionRef.current.value,
        // phonenumber: parseInt(phonenumberRef.current.value),
        // email: emailRef.current.value
      }

      console.log(newEmployee)
      API.createEmployee(newEmployee)
        .then( res => {
          console.log(res)
        })
      handleClose()
      alert("Thanks for submiting!")
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add An Employee
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add an employee</Modal.Title>
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EmployeeModal;