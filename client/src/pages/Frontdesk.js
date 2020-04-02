import React, { Component } from "react";
import './frontdeskstyle.css';
import { Link } from "react-router-dom";
import API from "../utils/API";
import Small from "../components/TableExamples/Small";
import Medium from "../components/TableExamples/Medium";
import Large from "../components/TableExamples/Large";
import XL from "../components/TableExamples/XL";

import { List, ListItem } from "../components/List";

class Frontdesk extends Component {
    state = {
        savedTableIds: [],
    }
// functions for diningroom collection testing!!
    retriveSavedTables = () => {
        API.getTables().then(res => {
            const savedTableIds = res.data.map(table => table._id);
            this.setState({ savedTableIds });
        })
            .catch(err => console.log(err));
    };

    buildTable = () => {
        console.log("come into buildTable function")
        let tableData = {
            seats: 2,
            twoSeat: true
        }
        console.log("tableData: ", tableData)
        API.createNewTable(tableData)
            .then(res => {
                console.log("res.data: ", res.data);
                this.retriveSavedTables()
            })
            .catch(err => console.log(err));
    }

    deleteTable = TableId =>{
        console.log(TableId)
        API.deleteTable(TableId)
            .then(this.retriveSavedTables)
            .catch(err => console.log(err))
    }

// functions for menu collection testing!!

    render() {
        console.log(this.state)
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
                {!this.state.savedTableIds.length ? (
                        <h2>not yet create table</h2>
                    ) : (this.state.savedTableIds.map(table => {
                        return (
                            <List>
                                <ListItem key={table}>
                                        <button onClick={()=> this.deleteTable(table)}>
                                            tableID: {table}
                                        </button>
                                </ListItem>
                            </List>
                        )
                    }))}
            </>
        );
    }
}

export default Frontdesk;