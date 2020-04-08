import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API';
import "./clearfix.css";


function DeleteDishModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Appetizer = props.menu.filter(dish =>
        dish.category === "Appetizer"
    )
    console.log("Appetizer: ", Appetizer)
    const Entre = props.menu.filter(dish =>
        dish.category === "Entree"
    )
    const Dessert = props.menu.filter(dish =>
        dish.category === "Dessert"
    )

    function removeDish(id) {
        API.deleteDish(id)
            .then(results => {
                props.getMenu()
            })
    }
    return (
        <>
            <Button variant="primary" className="mt-4" onClick={handleShow}>
                Delete Dish
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontFamily: "monospace", fontSize: "25px"}}>Delete Dish From Menu:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{fontFamily: "monospace", fontSize: "20px"}}>Appetizer:</p>

                    <ul>
                        {Appetizer.length ? (
                            Appetizer.map(dish => {
                                return (
                                    <>
                                    <div>
                                        <li key={dish._id}> {dish.item}, ${dish.price}, {dish.cook_time} minute preparation</li>
                                        <button style={{height: "20px", width: "50px", backgroundColor: "red", fontSize: "16px"}} onClick={() => removeDish(dish._id)}>X</button>
                                    </div>
                                    </>
                                )

                            })
                        ) : (
                                <h2>-no appetizers on menu-</h2>
                            )}
                    </ul>
                    <p style={{fontFamily: "monospace", fontSize: "20px"}}>Entree:</p>
                    <ul>
                        {Entre.length ? (
                            Entre.map(dish => {
                                return (
                                    <>
                                    <div>
                                        <li key={dish._id}> {dish.item}, ${dish.price}, {dish.cook_time} minute preparation</li>
                                        <button style={{height: "20px", width: "50px", backgroundColor: "red", fontSize: "16px"}} onClick={() => removeDish(dish._id)}>X</button>
                                    </div>
                                    </>
                                )
                            })
                        ) : (
                                <h2>-no entrees on menu-</h2>
                            )}
                    </ul>
                    <p style={{fontFamily: "monospace", fontSize: "20px"}}>Dessert:</p>
                    <ul>
                        {Dessert.length ? (
                            Dessert.map(dish => {
                                return (
                                    <>
                                        <li key={dish._id}> {dish.item}, ${dish.price}, {dish.cook_time} minute preparation</li>
                                        <button style={{height: "20px", width: "50px", backgroundColor: "red", fontSize: "16px"}} onClick={() => removeDish(dish._id)}>X</button>
                                    </>
                                )
                            })
                        ) : (
                                <h2>-no desserts on menu-</h2>
                            )}
                    </ul>


                </Modal.Body>
                <Modal.Footer>
                    {/* <AddDishModal /> */}
                    {/* <DeleteDishModal /> */}

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteDishModal;