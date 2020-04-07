import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'
// import EmployeeContext from '../../utils/EmployeeContext'

function CustomSearch(props) {
    const [show, setShow] = useState(false); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const [range, setRange] = useState({
      startDate: "",
      endDate: ""
    })

    function handleInputChange(event){
        const { name, value } = event.target
        setRange({...range, [name]: value})
    }

    function handleSubmit (start, end){
        props.userSearch(start, end);
        handleClose()
    }


    console.log(range)
    return (
      <>
        <button variant="primary" style={{width: "100px", margin: "1%"}} className="btn btn-primary" onClick={handleShow}>
          Search
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Custom search</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              Beginning Date: (MM/DD/YYYY)
              <div className="form-group text-center">
                <input
                style={{marginTop: "5%"}}
                className="input"
                type="text"
                name= "startDate"
                onChange={handleInputChange}
                />
              </div>
              End Date: (MM/DD/YYYY)
              <div className="form-group text-center">
                <input
                style={{marginBottom: "5%"}}
                className="input"
                type="text"
                name="endDate"
                onChange={handleInputChange}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleSubmit(range.startDate, range.endDate)}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default CustomSearch;