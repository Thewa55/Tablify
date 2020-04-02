import React, { Component } from "react";
import './frontdeskstyle.css';
import { Link } from "react-router-dom";
import API from "../utils/API";
import Small from "../components/TableExamples/Small";
import Medium from "../components/TableExamples/Medium";
import Large from "../components/TableExamples/Large";
import XL from "../components/TableExamples/XL";

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
                    <Small />
                    <Medium />
                    <Large />
                    <XL />
                </div>
            </>
        );
    }
}

export default Frontdesk;