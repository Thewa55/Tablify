import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'



function OrderListModal(props) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Button className="table-small table text-center" onClick={handleShow}>Test Small</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order List </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>

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