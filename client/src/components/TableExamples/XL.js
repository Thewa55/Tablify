import React from "react";
import './tablestyle.css';
import Draggable, {DraggableCore} from 'react-draggable'; 

function XL() {
    return (
        <Draggable handle=".table">
            <div className="table-xl table text-center">
                <div className="interior-xl interior">Test XL</div>
            </div>
        </Draggable>
    );
};

export default XL;