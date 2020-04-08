import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'
import Draggable, { DraggableCore } from 'react-draggable';



function FixedLargeTableModal(props) {
    // console.log(props.table)
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState({
        X: 0,
        Y: 0
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handleDrag(e, ui) {
        // console.log("ui: ", ui)
        setPosition({ X: ui.lastX, Y: ui.lastY })
    }
    function handleSavePosition() {
        // console.log("X&Y: ",X, Y)
        const newPosition = {
            X: position.X,
            Y: position.Y
        }
        props.saveTablePosition(props.table._id, newPosition)
        setPosition({ X: 0, Y: 0 })
        handleClose()
    }


    return (
        <>
            
            <Draggable onDrag={handleDrag} handle=".table" defaultPosition={{ x: 300, y: 200 }} >
                {/* <Draggable onStart={() => false} handle=".table" defaultPosition={{ x: 329, y: 240 }} > */}
                <Button className="table-large table text-center" style={{ backgroundColor: props.table.color }} onClick={handleShow}>Test large</Button>
            </Draggable>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you want to save this position? </Modal.Title>
                </Modal.Header>


                <Modal.Body>

                    <br></br><br></br>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSavePosition}>
                        OK
                    </Button>
                    <Button onClick={handleClose}>
                        NO
                    </Button>
                </Modal.Footer>



            </Modal>
        </>
    );
}

export default FixedLargeTableModal;