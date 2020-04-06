import React from "react";
import './tablestyle.css';
import Draggable, {DraggableCore} from 'react-draggable'; 


function Large() {
    return (
        <Draggable handle=".table">
            <div className="table-large table text-center">
                <div className="interior-large interior">Test Large</div>
            </div>
        </Draggable>
    );
};

export default Large;