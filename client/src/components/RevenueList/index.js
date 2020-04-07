import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import moment from 'moment';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CustomSearch from '../CustomSearch'
import InvoiceModal from '../InvoiceModal'


function RevenueList(){
  const [tableHistory, setTableHistory] = useState([]);
  const [todayTrans, setTodayTrans] = useState([])
  const [selected, setSelected] = useState({
    invoices:[],
    date: ""
  })

  const today = moment().format('L').toString()
  const yesterday = moment().subtract(1, 'day').format('L')
  const week = moment().subtract(7, 'day').format('L')
  
  function getTableHistory() {  
    API.getTableHistory()
      .then(results => {
        console.log(results.data)
        setTableHistory(results.data)
        console.log(today)
        let transaction = results.data.filter(receipt => receipt.date === today)
        setSelected({ invoices: transaction , date: today})
        setTodayTrans(transaction)
    })
  };

  function getToday(){
    setSelected({invoices: todayTrans, date: today})
  }

  function getYesterday(){
      let transaction = tableHistory.filter(receipt => receipt.date === yesterday)
      setSelected({invoices: transaction, date: yesterday})
  }

  function getWeek(){
    let transaction = [];
    let timeFrame = `${today} - ${week}`;
    tableHistory.forEach(invoice =>{
      if(moment(invoice.date).isBetween(week, today, 'day', [])){
        transaction.push(invoice)
      }
    })
    setSelected({invoices: transaction, date: timeFrame})
  }

  function userSearch(start, end){
    let transaction = [];
    let timeFrame = `${start}- ${end}`
    tableHistory.forEach(invoice => {
      if(moment(invoice.date).isBetween(end, start, 'day', [])){
        transaction.push(invoice)
      }
    })
    setSelected({invoices: transaction, date: timeFrame})
  }

  useEffect(() => {
    getTableHistory()
  }, []);

//   console.log(today)
//   console.log(yesterday)
  console.log(tableHistory)
//   console.log(todayTrans)
  console.log(selected)
  return(
    <div>
      This is the Revenue List.
      <div>
        <Button variant="primary" onClick={getToday}>Today</Button>
        <Button variant="primary" onClick={getYesterday}>Yesterday</Button>
        <Button variant="primary" onClick={getWeek}>Week</Button>
        <CustomSearch userSearch={userSearch} />
      </div>
      {selected.invoices.length === 0 ? (
      <div>Sorry no transaction for {selected.date}. </div>
      ):(<Table striped bordered hover size="sm">
      <thead>
      Revenue from {selected.date}
        <tr>
          <th>Date</th>
          <th>Order #</th>
          <th>Order total</th>
          <th>View invoice</th>
        </tr>
      </thead>
      <tbody>
       {selected.invoices.map( select => (
          <tr>
            <td>{select.date}</td>
            <td>{select._id}</td>
            <td>${select.total_price}</td>
            <td><InvoiceModal items={select}/></td>
          </tr>

     ))}
        </tbody>
      </Table>)}
    </div>
  )
}


export default RevenueList;