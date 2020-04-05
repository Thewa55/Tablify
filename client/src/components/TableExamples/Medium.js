import React from "react";
import './tablestyle.css';
import Draggable, {DraggableCore} from 'react-draggable'; 

function Medium() {
    return (
        <Draggable>
            <div className="table-medium table text-center">Test Medium</div>
        </Draggable>
    );
};

export default Medium;