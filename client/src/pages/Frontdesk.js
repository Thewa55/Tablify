import React, { Component } from "react";
import './frontdeskstyle.css';
import TableExample from '../components/TableExample/TableExample';
import { Link } from "react-router-dom";

class Frontdesk extends Component {

    buildTable = () => {
        return;
    }

    render() {
        return (
            <>
            <div class="sidenav">
                <button onClick={() => this.buildTable}>
                    Build Table
                </button>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
            <div class="main">
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