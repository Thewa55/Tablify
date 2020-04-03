import React from "react";
import "../style.css";
import KitchenCard from "../components/KitchenCard";
import { Link } from "react-router-dom";

const styles = {
  sectionStyles: {
    background: "orange"
  }
};

function Kitchen() {
  return (
    <div>
      <div class="col-md-2">
        <KitchenCard />
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Kitchen;
