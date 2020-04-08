import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

function KitchenCards(props) {
  console.log(props.table._id)
  let order = props.table.order.split(",")
  let numberOfDish = props.table.order_quantity.split(",")

  const finished = () => {
    props.cooked(props.table._id)
  }

  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <ul>
            {order.map(function(dish, i){
              return(
                <li>{dish} - {numberOfDish[i]} </li>
              )})
            }
          </ul>
        </Card.Text>
        <Button variant="danger" onClick={finished}>Done</Button>
      </Card.Body>
    </Card>
  );
}

export default KitchenCards;
