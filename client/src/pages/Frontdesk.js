import React, { Component } from "react";
import './frontdeskstyle.css';
import TableExample from '../components/TableExample/TableExample';

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