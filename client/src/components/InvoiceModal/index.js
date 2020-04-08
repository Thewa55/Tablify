import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function InvoiceModal(props) {
  const [show, setShow] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  
  let dishes = props.items.order.split(",")
  let numDish = props.items.order_quantity.split(",")

  return (
    <>
      <Button variant="primary" className="mt-0" style={{width: "50%"}} onClick={handleShow}>
        View
      </Button>
  
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Invoice ID: {props.items._id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity Ordered</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map(function(dish, i){
              return(
              <tr>
                <td>{dish}</td>
                <td>{numDish[i]}</td>
              </tr>
              )})
            }
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
      </Modal>
    </>
  );
}

export default InvoiceModal;