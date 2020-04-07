import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';
import "../TableExamples/tablestyle.css";
import Draggable, { DraggableCore } from 'react-draggable';
import moment from 'moment';


function OrderingSysModal(props) {
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
    let orderedDish = [];
    let orderedDishCount = [];
    let totalPrice = 0;

    function handleInputChange(event) {
        let value = parseInt(event.target.value);
        let name = event.target.name;
        let price = parseFloat(event.target.id);
        console.log("value, price: ", value, ", ", price)
        orderedDish.push(name)
        orderedDishCount.push(value)
        totalPrice += value * price;
    }


    function handleSubmit(event) {
        event.preventDefault();

        const orderString = orderedDish.toString();
        const orderQuantityString = orderedDishCount.toString();

        const newOrderTohistory = {
            date: moment().format('L'),
            order: orderString,
            order_quantity: orderQuantityString,
            total_price: totalPrice
        }
        console.log("neworderhistory: ", newOrderTohistory)
        API.createTableHistory(newOrderTohistory)
            .then(res => {
                console.log(res)
            })
            console.log("prop and prop.changeTable", props, ", ",props.changeTableAvailability)
        const newTableInfo = {
            id: props.table._id,
            order: orderString,
            order_quantity: orderQuantityString,
            total_price: totalPrice
        }
        props.changeTableAvailability(newTableInfo, props.table.availability)

        handleClose()
        orderedDish = [];
        orderedDishCount = [];
        alert("Thank you for your submission.")
    }
    
    return (
        <>
            <Draggable handle=".table">
                <div className="table-small table text-center">
                    <div className="interior-small interior" onClick={handleShow}>Test Small</div>
                </div>
            </Draggable>

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
                                                id={dish.price}
                                                className="input"
                                                type="text"
                                                placeholder="Num"
                                                onChange={handleInputChange}
                                            ></input>
                                        </li>
                                    )
                                })
                            ) : (
                                    <h2>No Appetizers Currently Listed</h2>
                                )}
                        </ul>
                        <p>Entree:</p>
                        <ul>
                            {Entre.length ? (
                                Entre.map(dish => {
                                    return (
                                        <li key={dish._id}>
                                            {dish.item}:
                                            <input
                                                name={dish.item}
                                                id={dish.price}
                                                className="input"
                                                type="text"
                                                placeholder="Num"
                                                onChange={handleInputChange}
                                            ></input>
                                        </li>
                                    )
                                })
                            ) : (
                                    <h2>No Entrees Currently Listed</h2>
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
                                                id={dish.price}
                                                className="input"
                                                type="text"
                                                placeholder="Num"
                                                onChange={handleInputChange}
                                            ></input>
                                        </li>
                                    )
                                })
                            ) : (
                                    <h2>No Desserts Currently Listed</h2>
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