import React from "react";
import "../style.css";
import KitchenCard from "../components/KitchenCard";
import Navbar from "../components/Navbar";

const styles = {
  sectionStyles: {
    background: "orange"
  }
};

function Kitchen() {
  return (
    <div>
      <div class="col-md-2">
        <Navbar/>
        <KitchenCard/>
        <KitchenCard/>
      </div>
    </div>
  );
}

export default Kitchen;
