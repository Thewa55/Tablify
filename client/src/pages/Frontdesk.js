import React, { Component } from "react";
import './frontdeskstyle.css';
import { Link } from "react-router-dom";
import API from "../utils/API";
import Small from "../components/TableExamples/Small";
import Medium from "../components/TableExamples/Medium";
import Large from "../components/TableExamples/Large";
import XL from "../components/TableExamples/XL";
import ViewMenuModal from "../components/ViewMenuModal/ViewMenuModal"
import Draggable, { DraggableCore } from 'react-draggable';
import OrderingSysModal from "../components/OrderingSysModal/OrderingSysModal"

import { List, ListItem } from "../components/List";
import OrderListModal from "../components/OrderListModal/OrderListModal";


class Frontdesk extends Component {
    state = {
        tables: [],
        menu: [],
        tableHistory: []
    }
    // functions for diningroom collection testing!!


    getSavedTable = () => {
        API.getTables().then(res => {
            this.setState({ tables: res.data })
        })
    };

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
        } else if (type === 8) {
            tableData = {
                seats: 8
            }
        }

        API.createNewTable(tableData)
            .then(res => {
                console.log("res.data: ", res.data);
                this.getSavedTable()
            })
            .catch(err => console.log(err));
    }

    changeTableStatus = (newTableInfo,status) =>{
        console.log("newTableInfo: ", newTableInfo)
        console.log("status: ", status)
        if(status === "Occupied"){
            console.log("Match Occupied")
            status = "Appetizer"
            let color = "yellow"
            this.state.tables.map(table => {
                if (table._id === newTableInfo.id) {
                    console.log("Matched Table")
                    let newTable = {
                        // seats: parseInt(table.seats),
                        // order: newTableInfo.order,
                        // order_quantity: newTableInfo.order_quantity,
                        // total_price: parseFloat(newTableInfo.total_price),
                        color: color,
                        status: status,
                        // availability: false
                    }
                    console.log("newTable: ",newTable)
                    this.updateTable(table._id,newTable)
                    this.getSavedTable()
                }
            })
        }
        else if(status === "Appetizer"){
            status = "Entree"
            let color = "red"
            this.state.tables.map(table => {
                if (table._id === newTableInfo.id) {
                    let newTable = {
                        seats: parseInt(table.seats),
                        order: newTableInfo.order,
                        order_quantity: newTableInfo.order_quantity,
                        total_price: parseFloat(newTableInfo.total_price),
                        color: color,
                        status: status,
                        availability: false
                    }
                    console.log("newTable: ",newTable)
                    this.updateTable(table._id,newTable)
                    this.getSavedTable()
                }
            })
        }
        else if(status === "Entree"){
            status = "Dessert"
            let color = "gray"
            this.state.tables.map(table => {
                if (table._id === newTableInfo.id) {
                    let newTable = {
                        seats: parseInt(table.seats),
                        order: newTableInfo.order,
                        order_quantity: newTableInfo.order_quantity,
                        total_price: parseFloat(newTableInfo.total_price),
                        color: color,
                        status: status,
                        availability: false
                    }
                    console.log("newTable: ",newTable)
                    this.updateTable(table._id,newTable)
                    this.getSavedTable()
                }
            })
        }
        else if(status === "Dessert"){
            status = "Done"
            let color = "white"
            this.state.tables.map(table => {
                if (table._id === newTableInfo.id) {
                    let newTable = {
                        seats: parseInt(table.seats),
                        order: newTableInfo.order,
                        order_quantity: newTableInfo.order_quantity,
                        total_price: parseFloat(newTableInfo.total_price),
                        color: color,
                        status: status,
                        availability: false
                    }
                    console.log("newTable: ",newTable)
                    this.updateTable(table._id,newTable)
                    this.getSavedTable()
                }
            })
        }
    }

    changeTableAvailability = (newTableInfo, availability) => {
        console.log("newTableInfo: ",newTableInfo)
        console.log("availability: ",availability)
        if (availability === true) {
            console.log("availability is true")
            availability = false
            this.state.tables.map(table => {
                if (table._id === newTableInfo.id) {
                    console.log("is match")
                    let newTable = {
                        seats: parseInt(table.seats),
                        order: newTableInfo.order,
                        order_quantity: newTableInfo.order_quantity,
                        total_price: parseFloat(newTableInfo.total_price),
                        color: "green",
                        status: "Occupied",
                        availability: availability
                    }
                    console.log("newTable: ",newTable)
                    this.updateTable(table._id,newTable)
                    this.getSavedTable()
                }
            })
        } else {
            availability = true
            this.state.tables.map(table => {
                if (table._id === newTableInfo.id) {
                    let newTable = {
                        seats: parseInt(table.seats),
                        order: "",
                        order_quantity: "",
                        total_price: "",
                        color: "blue",
                        status: "Unoccupied",
                        availability: availability
                    }
                    this.updateTable(table._id,newTable)
                    this.getSavedTable()
                }
            })
        }

    }

    updateTable = (tableId, newTablestatus) => {
        console.log("call API to update availability")
        API.changeTableStatus(tableId, newTablestatus)
            .then(result => {
                console.log(result)
                this.getSavedTable()
            })
    }
    // functions for menu collection testing!!

    getMenu = () => {
        API.getMenu().then(res => {
            console.log(res.data)
            const savedMenu = res.data;
            this.setState({ menu: savedMenu });
        })
            .catch(err => console.log(err));
    }

    //  functions for table this.state.specificTableHistory testing
    getTableHistoryById = TableId => {
        console.log("Table Id: ", TableId)
        API.findTableHistoryById(TableId).then(res => {
            console.log(res.data)
            const specificTableHistory = res.data;
            this.setState({ tableHistory: specificTableHistory });
        })
            .catch(err => console.log(err));
    }
    AddTableHistory = () => {
        console.log("go into add Table History function")
        const testOrder =
        {
            // start_at: Date(),
            date: "04/06/2020",
            order: "test dish 2, test dish 3",
            order_quantity: "1, 2",
            total_price: 53.15
        }



        API.createTableHistory(testOrder)
            .then(res => {
                console.log("res.data: ", res.data);
                this.retriveSavedTableHistoryById(res.data._id)
            })
            .catch(err => console.log(err));
    }


    componentDidMount = () => {
        this.getSavedTable()
        this.getMenu()
    }


    render() {
        console.log("state: ", this.state)
        return (
            <>
                <div className="sidenav">

                    <div className="logo-box">
                        <h1 style={{ fontSize: "100px", textAlign: "center" }}>T</h1>
                    </div>

                    <h1 className="box-top">Build Tables</h1>
                    <div className="inner-box">
                        <button onClick={() => this.buildTable(2)}>
                            Build Small
                        </button>
                        <button onClick={() => this.buildTable(4)}>
                            Build Medium
                        </button>
                        <button onClick={() => this.buildTable(6)}>
                            Build Large
                        </button>
                        <button onClick={() => this.buildTable(8)}>
                            Build XL
                        </button>
                    </div>

                    <h1 className="box-top" style={{marginTop: "15%"}}>Menu and Payment</h1>
                    <div className="inner-box">
                        <ViewMenuModal
                            menu={this.state.menu}
                            getMenu={this.getMenu}
                        />
                        <Link to="/Payment">
                            <button>Payment</button>
                        </Link>
                    </div>

                    <Link to="/">
                        <button style={{marginTop: "25%", backgroundColor: "white"}}>Home</button>
                    </Link>
                </div>

                <div id="main">
                    {/* create tables */}
                    {!this.state.tables ? (
                        <h2 style={{ color: "white" }}>No Tables Generated Yet</h2>
                    ) : (this.state.tables.map(table => {
                        if (table.seats === 2) {
                            if (table.availability === true){
                                return(
                                    <OrderingSysModal
                                    key={table._id}
                                    table={table}
                                    menu={this.state.menu}
                                    changeTableAvailability={this.changeTableAvailability}
                                    getSavedTable = {this.getSavedTable}
                                />
                                )
                            }else{
                                return(
                                    <OrderListModal 
                                    key = {table._id}
                                    table={table}
                                    changeTableStatus = {this.changeTableStatus}
                                    changeTableAvailability={this.changeTableAvailability}
                                    getSavedTable = {this.getSavedTable}
                                    />
                                )
                            }
                                
                            
                            // return (
                                
                            //     <OrderingSysModal
                            //         key={table._id}
                            //         tableId={table._id}
                            //         menu={this.state.menu}
                            //         getMenu={this.getMenu}
                            //     />
                            // )
                        } else if (table.seats === 4) {
                            return (
                                <Medium />
                            )
                        } else if (table.seats === 6) {
                            return (
                                <Large />
                            )
                        } else {
                            return (
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