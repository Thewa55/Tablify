import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'

// prop here pass getMenu function to refresh the menu
function AddDishModal(props) {
    const [show, setShow] = useState(false);

    const dishRef = useRef()
    const priceRef = useRef()
    const cookTimeRef = useRef()
    const categoryRef = useRef()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(event) {
        event.preventDefault();
        const newDish = {
            item: dishRef.current.value,
            category: categoryRef.current.value,
            price: parseInt(priceRef.current.value),
            cook_time: parseInt(cookTimeRef.current.value)
        };

        console.log(newDish)
        API.createNewDish(newDish)
            .then(res => {
                console.log(res)
            });
        
        handleClose();
        props.getMenu();
        console.log("finish call getMenu after add");
        alert("New Dish Added!");
    }


    return (
        <>
            <Button variant="primary" className="mt-4" onClick={handleShow}>
                Add Dish
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontFamily: "monospace", fontSize: "30px"}}>Add Dish:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group text-center">
                            <input
                                style={{ marginTop: "5%" }}
                                className="input"
                                ref={dishRef}
                                type="text"
                                placeholder="Dish Name"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                style={{ marginBottom: "5%" }}
                                className="input"
                                ref={categoryRef}
                                type="text"
                                placeholder="Appetizer, Entree, or Dessert"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                style={{ marginBottom: "5%" }}
                                className="input"
                                ref={priceRef}
                                type="text"
                                placeholder="Price"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                style={{ marginBottom: "5%" }}
                                className="input"
                                ref={cookTimeRef}
                                type="text"
                                placeholder="Preparation Time (in minutes)"
                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer className="text-center">
                    <Button variant="primary" style={{margin: "0 auto"}} onClick={handleSubmit}>
                        Add Dish
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddDishModal;