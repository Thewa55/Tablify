import React, { Component } from "react";
import './frontdeskstyle.css';
import TableExample from '../components/TableExample/TableExample';
import { Link } from "react-router-dom";
import API from "../utils/API";

class Frontdesk extends Component {

    buildTable = () => {
        console.log("come into buildTable function")
        let tableData = {
            seats: 2,
            twoSeat: true
        }
        console.log("tableData: ",tableData)
        API.createNewTable(tableData)
            .then(res => console.log("res.data: ",res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <div className="sidenav">
                    <button onClick={() => this.buildTable()}>
                        Build Table
                </button>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
                <div className="main">
                    <TableExample />
                    <TableExample />
                    <TableExample />
                    <TableExample />
                </div>
            </>
        );
    }
}

export default Frontdesk;