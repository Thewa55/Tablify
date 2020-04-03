import React, { Component } from "react";
import './frontdeskstyle.css';
import { Link } from "react-router-dom";
import API from "../utils/API";
import Small from "../components/TableExamples/Small";
import Medium from "../components/TableExamples/Medium";
import Large from "../components/TableExamples/Large";
import XL from "../components/TableExamples/XL";
import Dragula from 'react-dragula';

import { List, ListItem } from "../components/List";

class Frontdesk extends Component {
    state = {
        savedTableIds: [],
        savedMenu: []
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

    deleteTable = TableId => {
        console.log(TableId)
        API.deleteTable(TableId)
            .then(this.retriveSavedTables)
            .catch(err => console.log(err))
    }


    // functions for menu collection testing!!
    retriveSavedMenu = () => {
        API.getMenu().then(res => {
            console.log(res.data)
            const savedMenu = res.data;
            this.setState({ savedMenu });
        })
            .catch(err => console.log(err));
    }



    componentDidMount = () => {
        Dragula([document.querySelector('#main')]);
    }


    render() {
        console.log(this.state)
        return (
            <>
                <div className="sidenav">
                    <div className="logo-box">
                        <h1 style={{fontSize: "80px", textAlign: "center"}}>T</h1>
                    </div>
                    <button onClick={() => this.buildTable()}>
                        Build Table
                    </button>
                    <button onClick={() => this.retriveSavedMenu()}>
                        Show Menu
                    </button>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
                <div id="main">
                        <Small />
                        <Medium />
                        <Large />
                        <XL />
                </div>
                <List>
                {!this.state.savedTableIds.length ? (
                        <h2 style={{color: "white"}}>No Tables Generated Yet</h2>

                    ) : (this.state.savedTableIds.map(table => {
                        return (

                            <ListItem key={table}>
                                <button onClick={() => this.deleteTable(table)}>
                                    tableID: {table}
                                </button>
                            </ListItem>

                        )
                    }))}
                </List>
                <br></br><hr></hr>
                <List>
                    {!this.state.savedMenu.length ? (
                        <h2>not yet create Dish</h2>
                    ) : (this.state.savedMenu.map((dish, i) => {
                        return (
                            <ListItem key={i}
                                id={dish._id}
                            >
                                <button>
                                    dish name: {dish.item}
                                    dish category: {dish.category}
                                    dish price: {dish.price}
                                    dish cook time: {dish.cook_time}
                                </button>
                            </ListItem>
                        )
                    }))}
                </List>

            </>
        );
    }
}

export default Frontdesk;