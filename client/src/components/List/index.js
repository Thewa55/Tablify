import React from "react";
import "./style.css";
import { defaultProps } from "recompose";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return <li className="list-group-item">{props.children}</li>;
}
