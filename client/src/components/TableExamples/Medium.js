import React from "react";
import './tablestyle.css';
import Draggable, {DraggableCore} from 'react-draggable'; 

function Medium() {
    return (
        <Draggable handle=".table">
            <div className="table-medium table text-center">
                <div className="interior-medium interior">Test Medium</div>
            </div>
        </Draggable>
    );
};

export default Medium;