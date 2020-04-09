import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'
import moment from 'moment'
// import EmployeeContext from '../../utils/EmployeeContext'

function CustomSearch(props) {
    const [show, setShow] = useState(false); 
    const [check, setCheck] = useState(true)
    const [err, setError] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const today = moment().format('L').toString();

    const [range, setRange] = useState({
      startDate: "",
      endDate: ""
    })

    function handleInputChange(event){
        const { name, value } = event.target
        setRange({...range, [name]: value})
        if(moment(range.endDate).isAfter(today, 'day')){
          setError("Can't set end date after today")
          setCheck(true)
        }else if(range.startDate && range.endDate){
          if(moment(range.endDate).isAfter(moment(range.startDate), 'day')){
            setCheck(true)
            setError("Can't set end date after the start date")
          }
        }else {setCheck(false)}
    }

    function handleSubmit (start, end){
      if(moment(range.startDate).isAfter(today, 'day')){
        setError("Can't set start date after today")
        setCheck(true)
        return
      }else{
        props.userSearch(start, end);
        handleClose()
      }
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
            <div>{err}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" disabled={check} onClick={() => handleSubmit(range.startDate, range.endDate)}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default CustomSearch;