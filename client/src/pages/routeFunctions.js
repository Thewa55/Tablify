import React, { Component } from "react";
import './frontdeskstyle.css';
import { Link } from "react-router-dom";
import API from "../utils/API";

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

    deleteTable = TableId => {
        console.log(TableId)
        API.deleteTable(TableId)
            .then(this.getSavedTable)
            .catch(err => console.log(err))
    }

    changeTableAvalibility = TableId =>{
        
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