import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'



function OrderListModal(props) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const orderedItem = props.tableHistory.order.split(",")
    const orderedQuantity = props.tableHistory.order_quantity.split(",")
    const order = [];
    
    for(var i =0; i < orderedItem.length; i++){
        order[i] = {
            item: orderedItem[i],
            quantity: orderedQuantity[i],
            id: i
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.changeTableAvailability(props.tableHistory._id, props.availability)
        handleClose()
        alert("Be ready for next customer!.")
    }

    return (
        <>
            <Button className="table-small table text-center" onClick={handleShow}>Test Small</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order List </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {order.length > 0 (
                            order.map(order => {
                                return(
                                    <li key = {order.id}> {order.item}, {order.quantity}</li>
                                )
                            })
                        )}
                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default OrderListModal;