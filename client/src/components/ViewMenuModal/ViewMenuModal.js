import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddDishModal from '../AddDishModal/AddDishModal'
import DeleteDishModal from '../DeleteDishModal/DeleteDishModal'
import API from '../../utils/API';


function ViewMenuModal(props) {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState({ category: [] });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Appetizer = props.menu.filter(dish =>
        dish.category === "Appetizer"
    )
    const Entree = props.menu.filter(dish =>
        dish.category === "Entree"
    )
    const Dessert = props.menu.filter(dish =>
        dish.category === "Dessert"
    )
    let Chosen = {};

    function changeCategory(event) {
        event.preventDefault();
        if (event.target.name === "Appetizer") {
            Chosen = {
                dish: Appetizer,
                name: "Appetizer"
            }
        }
        else if (event.target.name === "Entree") {
            Chosen = {
                dish: Entree,
                name: "Entree"
            }
        }
        else {
            Chosen = {
                dish: Dessert,
                name: "Dessert"
            }
        }
        console.log("Chosen: ", Chosen)
        setCategory(Chosen)
    }

    function removeDish(id) {
        console.log("id: ",id)
        API.deleteDish(id)
            .then(results => {
                props.getMenu()
                setCategory(Chosen)
            })
    }

    return (

        <>
            <button className="mt-4" onClick={handleShow}>
                View Menu
                </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontFamily: "monospace", fontSize: "30px" }}>Our Menu:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        {/* <div className="col"> */}
                        <Button onClick={changeCategory} name="Appetizer" style={{ marginLeft: "2%" }}>Appetizer</Button>
                        {/* </div> */}
                        {/* <div className="col"> */}
                        <Button onClick={changeCategory} name="Entree" style={{ marginLeft: "2%" }}>Entree</Button>
                        {/* </div> */}
                        {/* <div className="col"> */}
                        <Button onClick={changeCategory} name="Dessert" style={{ marginLeft: "2%" }}>Dessert</Button>
                        {/* </div> */}
                    </div>
                    <br></br>
                    {category.dish ? (
                        <>
                            <h4 style={{textAlign:"center"}}>{category.name}</h4>
                            <table>
                                <tr>
                                    <th>Dish Name</th>
                                    <th>Price</th>
                                    <th>Time
                                        (min)</th>
                                    <th>Remove</th>
                                </tr>
                                {category.dish.map(dish => {
                                    return (
                                        <tr>
                                            <th>{dish.item}</th>
                                            <th>{dish.price}</th>
                                            <th>{dish.cook_time}</th>
                                            <Button className="deleteDishBtn" onClick={() => removeDish(dish._id)}>x</Button>
                                        </tr>
                                    )
                                })}
                            </table>
                        </>
                    ) : (
                            <p>Please choose one of the categories above!</p>
                        )}

                </Modal.Body>
                <Modal.Footer>
                    <AddDishModal getMenu={props.getMenu} />
                    {/* <DeleteDishModal
                        getMenu={props.getMenu}
                        menu={props.menu}
                    /> */}

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewMenuModal;