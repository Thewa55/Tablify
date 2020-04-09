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
    <Card style={{ width: '24rem', margin: "1%", float: "left", border: "3px solid black", boxShadow: "1px 1px black"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title style={{textDecoration: "underline"}}>{props.table.table_name}</Card.Title>
        <Card.Text>
          <ul>
            {order.map(function(dish, i){
              return(
                <li><span style={{textDecoration: "underline"}}>{dish}</span> - <span style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>{numberOfDish[i]} orders</span></li>
              )})
            }
          </ul>
        </Card.Text>
        <div className="text-center">
          <Button variant="danger" onClick={finished}>Done</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default KitchenCards;
