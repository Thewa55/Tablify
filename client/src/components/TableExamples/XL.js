import React from "react";
import './tablestyle.css';
import Draggable, {DraggableCore} from 'react-draggable'; 

function XL() {
    return (
        <Draggable>
            <div className="table-xl table text-center">Test XL</div>
        </Draggable>
    );
};

export default XL;