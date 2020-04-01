import React from "react";
import './tablestyle.css';

const TableExample = props => {
    return (
        <div className="table-container">
            <div className="container m-5">
                <div className="row">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-2 check-table seat rounded"></div>
                    <div className="col-sm-5"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 table rounded">
                    <button type="button" className="btn btn-info btn-primary tableBtn table-button" >Table</button>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-2 check-table seat rounded"></div>
                    <div className="col-sm-5"></div>
                </div>
            </div>
      </div>
    );
};

export default TableExample;