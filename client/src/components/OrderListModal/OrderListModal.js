import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'
import Draggable, { DraggableCore } from 'react-draggable';



function OrderListModal(props) {
    console.log(props.table)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const orderedItem = props.table.order.split(",")
    // console.log("orderedItem: ", orderedItem)
    const orderedQuantity = props.table.order_quantity.split(",")
    const order = [];

    for (var i = 0; i < orderedItem.length; i++) {
        order[i] = {
            item: orderedItem[i],
            quantity: orderedQuantity[i],
            id: i
        }
    }
    // console.log("order of the table: ", order)

    function changeStatus(event) {
        event.preventDefault();
        const newTableInfo = {
            id: props.table._id,
            // color: props.table.color,
            status: props.table.status
        }
        props.changeTableStatus(newTableInfo, props.table.status)

        handleClose()
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newTableInfo = {
            id: props.table._id
        }
        props.changeTableAvailability(newTableInfo, props.table.availability)
        handleClose()
        alert("Be ready for next customer!.")
    }
    return (
        <>
            <Draggable onStart={() => false} handle=".table" defaultPosition={{ x: props.table.X, y: props.table.Y }} >
                <Button className="table-small table text-center" style={{ backgroundColor: props.table.color }} onClick={handleShow}>{props.table.table_name}</Button>
            </Draggable>

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
                        {props.table.status === "Occupied" ? (
                            <Button className="col text-dark" variant="secondary" style={{ backgroundColor: props.table.color }} onClick={changeStatus}>
                                Appetizer
                            </Button>
                        ) : (
                                <Button className="col" variant="secondary">
                                    Appetizer
                                </Button>
                            )}

                        {props.table.status === "Appetizer" ? (
                            <Button className="col text-dark" variant="secondary" style={{ backgroundColor: props.table.color }} onClick={changeStatus}>
                                Entree
                            </Button>
                        ) : (
                                <Button className="col" variant="secondary">
                                    Entree
                                </Button>
                            )}

                        {props.table.status === "Entree" ? (
                            <Button className="col text-dark" variant="secondary" style={{ backgroundColor: props.table.color }} onClick={changeStatus}>
                                Dessert
                            </Button>
                        ) : (
                                <Button className="col" variant="secondary">
                                    Dessert
                                </Button>
                            )}

                        {props.table.status === "Dessert" ? (
                            <Button className="col text-dark" variant="secondary" style={{ backgroundColor: props.table.color }} onClick={handleSubmit}>
                                Clear
                            </Button>
                        ) : (
                                <Button className="col" variant="secondary">
                                    Clear
                                </Button>
                            )}

                    </div>
                </div>



            </Modal>
        </>
    );
}

export default OrderListModal;