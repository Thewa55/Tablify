import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'



function OrderListModal(props) {
    console.log(props.table)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const orderedItem = props.table.order.split(",")
    const orderedQuantity = props.table.order_quantity.split(",")
    const order = [];

    for (var i = 0; i < orderedItem.length; i++) {
        order[i] = {
            item: orderedItem[i],
            quantity: orderedQuantity[i],
            id: i
        }
    }
    console.log("order of the table: ", order)

    function handleSubmit(event) {
        event.preventDefault();
        props.changeTableAvailability(props.table._id, props.availability)
        handleClose()
        alert("Be ready for next customer!.")
    }
    return (
        <>
            <Button className="table-small table text-center" style={{backgroundColor: props.table.color}} onClick={handleShow}>Test Small</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order List </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {
                            order.map(order => {
                                return (
                                    <li key={order.id}> {order.item}, {order.quantity}</li>
                                )
                            })
                        }
                    </ul>
                    <h3>Total Price: {props.table.total_price}</h3>

                </Modal.Body>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        {/* <Button className="offset-md-1 col-md-2 " variant="secondary" onClick={handleClose}> */}
                        <Button className="col" variant="secondary" onClick={handleClose}>
                            Appetizer
                        </Button>
                        <Button className="col" variant="secondary" onClick={handleClose}>
                            Entree
                        </Button>
                        <Button className="col" variant="secondary" onClick={handleClose}>
                            Dessert
                        </Button>
                        <Button className="col" variant="primary" onClick={handleSubmit}>
                            Clear
                        </Button>
                    </div>
                </div>



            </Modal>
        </>
    );
}

export default OrderListModal;