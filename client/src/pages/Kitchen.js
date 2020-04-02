import React from 'react';
import '../style.css';
// import { Link } from "react-router-dom";

function Kitchen() {
  return (
    <div>Test
        <div class="col-md-4">
        <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">Table1</h5>
            <hr></hr>
            <h6 class="card-subtitle mb-2 text-muted">Appetizer 1</h6>
            <h6 class="card-subtitle mb-2 text-muted">Appetizer 2</h6>
            <h6 class="card-subtitle mb-2 text-muted">Entre 1</h6>
            <h6 class="card-subtitle mb-2 text-muted">Entre 2</h6>
            <button onclick="Prepare()">Prepare</button>
            <button onclick="Done()">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;