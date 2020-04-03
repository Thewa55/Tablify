import React from "react";
import "./style.css";

function KitchenCards(props) {
  return (
    <div className="card">
      <div className="content"></div>
      <hr></hr>
      <ul>
        <li>
          <strong>Appetizer:</strong>
          {props.appetizer}
        </li>
        <li>
          <strong>Entre:</strong>
          {props.entre}
        </li>
        <li>
          <strong>Main:</strong>
          {props.main}
        </li>
        <li>
          <strong>Dessert:</strong>
          {props.Dessert}
        </li>
        {/* <span onClick={()=> props.prepare(props.id)} className="prepare">
                    Prepare
                    </span> */}
        <br></br>
        <form>
          <input type="submit" value="Prepare" />
        </form>
      </ul>
    </div>
  );
}

export default KitchenCards;
