import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API';


function DeleteDishModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Appetizer = props.menu.filter(dish =>
        dish.category === "Appetizer"
    )
    console.log("Appetizer: ", Appetizer)
    const Entre = props.menu.filter(dish =>
        dish.category === "Entre"
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
                    <Modal.Title>Delete Dish From Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Appetizer:</p>

                    <ul>
                        {Appetizer.length ? (
                            Appetizer.map(dish => {
                                return (
                                    <>
                                        <Button  className=" deleteBtn float-right" onClick={() => removeDish(dish._id)}>x</Button>

                                        <li key={dish._id}> {dish.item}, {dish.price} USD, {dish.cook_time} mins</li>
                                    </>
                                )

                            })
                        ) : (
                                <h2>no Appetizer on the Menu</h2>
                            )}
                    </ul>
                    <p>Entre:</p>
                    <ul>
                        {Entre.length ? (
                            Entre.map(dish => {
                                return (
                                    <>
                                        <li key={dish._id}> {dish.item}, {dish.price}USD, {dish.cook_time} mins</li>
                                        <Button className=" deleteBtn float-right" onClick={() => removeDish(dish._id)}>x</Button>
                                    </>
                                )
                            })
                        ) : (
                                <h2>no Entre on the Menu</h2>
                            )}
                    </ul>
                    <p>Dessert:</p>
                    <ul>
                        {Dessert.length ? (
                            Dessert.map(dish => {
                                return (
                                    <>
                                        <li key={dish._id}> {dish.item}, {dish.price}USD, {dish.cook_time} mins</li>
                                        <Button className=" deleteBtn float-right" onClick={() => removeDish(dish._id)}>x</Button>
                                    </>
                                )
                            })
                        ) : (
                                <h2>no Dissert on the Menu</h2>
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