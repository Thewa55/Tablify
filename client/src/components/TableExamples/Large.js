import React from "react";
import './tablestyle.css';
import Draggable, {DraggableCore} from 'react-draggable'; 


function Large() {
    return (
        <Draggable>
            <div className="table-large table text-center">Test Large</div>
        </Draggable>
    );
};

export default Large;