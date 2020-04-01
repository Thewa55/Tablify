import React from "react";
import './tablestyle.css';

const TableExample = props => {
    return (
        <div class="table-container">
            <div class="container m-5">
                <div class="row">
                    <div class="col-sm-5"></div>
                    <div class="col-sm-2 check-table seat rounded"></div>
                    <div class="col-sm-5"></div>
                </div>
                <br />
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8 table rounded">
                    <button type="button" class="btn btn-info btn-primary tableBtn table-button" >Table</button>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
                <br />
                <div class="row">
                    <div class="col-sm-5"></div>
                    <div class="col-sm-2 check-table seat rounded"></div>
                    <div class="col-sm-5"></div>
                </div>
            </div>
      </div>
    );
};

export default TableExample;