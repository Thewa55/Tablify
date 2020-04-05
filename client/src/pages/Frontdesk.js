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

const SavedTables = [];

class Frontdesk extends Component {
    state = {
        tables: [],
        savedMenu: [],
        specificTableHistory: []
    }
    // functions for diningroom collection testing!!
    componentDidMount(){
        this.retriveSavedTables()
    }

    retriveSavedTables = () => {
        API.getTables().then(res =>{ 
            this.setState({ tables: res.data })  
        })
    };
q
    buildTable = type => {
        console.log("come into buildTable function")
        let tableData = {};
        if (type === 2) {
            tableData = {
                seats: 2
            }
        } else if (type === 4) {
            tableData = {
                seats: 4
            }
        } else if (type === 6) {
            tableData = {
                seats: 6
            }
        }

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
    AddDish = () => {
        const newDish = {
            item: "Test dish",
            category: "Appetizer",
            price: 11.25,
            cookTime: 10
        }
        console.log("newDish: ", newDish)

        API.createNewDish(newDish)
            .then(res => {
                console.log("res.data: ", res.data);
                this.retriveSavedMenu()
            })
            .catch(err => console.log(err));
    }
    deleteDish = DishId => {
        console.log("Dish ID passed in: ", DishId)
        API.deleteTable(DishId)
            .then(this.retriveSavedMenu)
            .catch(err => console.log(err))
    }

    //  functions for table this.state.specificTableHistory testing
    retriveSavedTableHistoryById = TableId => {
        console.log("Table Id: ", TableId)
        API.findTableHistoryById(TableId).then(res => {
            console.log(res.data)
            const specificTableHistory = res.data;
            this.setState({ specificTableHistory });
        })
            .catch(err => console.log(err));
    }
    AddTableHistory = () => {
        console.log("go into add Table History function")
        const testOrder =
        {
            // start_at: Date(),
            order: "test dish 2, test dish 3",
            order_quantity: "1, 2",
        }



        API.createTableHistory(testOrder)
            .then(res => {
                console.log("res.data: ", res.data);
                this.retriveSavedTableHistoryById(res.data._id)
            })
            .catch(err => console.log(err));
    }


    componentDidMount = () => {
        Dragula([document.querySelector('#main')]);
    }


    render() {
        console.log("state: ", this.state.tables)
        console.log("type of: ", typeof (this.state.tables))
        return (
            <>
                <div className="sidenav">
                    <div className="logo-box">
                        <h1 style={{ fontSize: "80px", textAlign: "center" }}>T</h1>
                    </div>
                    <button onClick={() => this.buildTable(2)}>
                        Build Table of 2
                    </button>
                    <button onClick={() => this.buildTable(4)}>
                        Build Table of 4
                    </button>
                    <button onClick={() => this.buildTable(6)}>
                        Build Table of 6
                    </button>
                    <button onClick={() => this.retriveSavedMenu()}>
                        View Menu
                    </button>
                    <button onClick={() => this.AddDish()}>
                        Add Dish
                    </button>
                    <button onClick={() => this.AddTableHistory()}>
                        Add Table this.state.specificTableHistory
                    </button>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>

                <div id="main">

                    {!this.state.tables ? (
                        <h2 style={{ color: "white" }}>No Tables Generated Yet</h2>
                    ) : (this.state.tables.map(table => {
                        if (table.seats === 2 ) {
                            return(
                                <Small />
                            )
                        }else if(table.seats === 4 ){
                            return(
                                <Medium />
                            )
                        }else{
                            return(
                                <XL />
                            )
                        }

                    }))}



                </div>

            </>
        );
    }
}

export default Frontdesk;