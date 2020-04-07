import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddDishModal from '../AddDishModal/AddDishModal'
import DeleteDishModal from '../DeleteDishModal/DeleteDishModal'


function ViewMenuModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Appetizer = props.menu.filter(dish => 
        dish.category === "Appetizer"
    )
    const Entre = props.menu.filter(dish => 
        dish.category === "Entre"
    )
    const Dessert = props.menu.filter(dish => 
        dish.category === "Dessert"
    )
    return (
        <>
            <button className="mt-4" onClick={handleShow}>
                View Menu
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Our Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Appetizer:</p>
                    <ul>
                        {Appetizer.length ? (
                            Appetizer.map(dish => {
                                return(
                                <li key={dish._id}> {dish.item}, {dish.price} USD, {dish.cook_time} mins</li>
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
                                return(
                                <li key={dish._id}> {dish.item}, {dish.price}, {dish.cook_time} min</li>
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
                                return(
                                <li key={dish._id}> {dish.item}, {dish.price}, {dish.cook_time} min</li>
                                )
                            })
                        ) : (
                                <h2>no Dissert on the Menu</h2>
                            )}
                    </ul>


                </Modal.Body>
                <Modal.Footer>
                    <AddDishModal getMenu={props.getMenu}/>
                    <DeleteDishModal 
                        getMenu = {props.getMenu}
                        menu = {props.menu}
                    />
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewMenuModal;