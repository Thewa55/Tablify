import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'



function OrderingSysModal(props) {
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
    let orderedDish = [];
    let orderedDishCount = [];

    function handleInputChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        orderedDish.push(name);
        orderedDishCount.push(parseInt(value));
    }


    function handleSubmit(event) {
        event.preventDefault();
       
        const orderString = orderedDish.toString();
        const orderQuantityString = orderedDishCount.toString();

        const newOrder = {
            order: orderString,
            order_quantity: orderQuantityString
        }
        console.log(newOrder)
        API.createTableHistory(newOrder)
            .then(res => {
                console.log(res)
            })
        handleClose()
        orderedDish = [];
        orderedDishCount = [];
        alert("Thanks for submiting!")
    }
    return (
        <>
            <Button className="table-small table text-center" onClick={handleShow}>Test Small</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Our Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <p>Appetizer:</p>
                        <ul>
                            {Appetizer.length ? (
                                Appetizer.map(dish => {
                                    return (
                                        <li key={dish._id}>
                                            {dish.item}:
                                            <input
                                                name={dish.item}
                                                className="input"
                                                type="text"
                                                placeholder="Num"
                                                onChange={handleInputChange}
                                            ></input>
                                        </li>
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
                                        <li key={dish._id}>
                                            {dish.item}:
                                            <input
                                                name={dish.item}
                                                className="input"
                                                type="text"
                                                placeholder="Num"
                                                onChange={handleInputChange}
                                            ></input>
                                        </li>
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
                                        <li key={dish._id}>
                                            {dish.item}:
                                            <input
                                                name={dish.item}
                                                className="input"
                                                type="text"
                                                placeholder="Num"
                                                onChange={handleInputChange}
                                            ></input>
                                        </li>
                                    )
                                })
                            ) : (
                                    <h2>no Dissert on the Menu</h2>
                                )}
                        </ul>
                    </form>

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

export default OrderingSysModal;