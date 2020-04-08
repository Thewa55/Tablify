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
        dish.category === "Entree"
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
                    <Modal.Title style={{fontFamily: "monospace", fontSize: "30px"}}>Our Menu:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{fontFamily: "monospace", fontSize: "20px"}}>Appetizer:</p>
                    <ul>
                        {Appetizer.length ? (
                            Appetizer.map(dish => {
                                return(
                                <li key={dish._id}> {dish.item}, ${dish.price}, {dish.cook_time} minute preparation</li>
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
                                return(
                                <li key={dish._id}> {dish.item}, ${dish.price}, {dish.cook_time} minute preparation</li>
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
                                return(
                                <li key={dish._id}> {dish.item}, ${dish.price}, {dish.cook_time} minute preparation</li>
                                )
                            })
                        ) : (
                                <h2>-no desserts on menu-</h2>
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