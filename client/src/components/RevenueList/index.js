import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'
import Moment from 'react-moment';
import moment from 'moment';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function RevenueList(){
  const [tableHistory, setTableHistory] = useState([]);
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
        // setTodayTrans(transaction)
    })
  };

  function getYesterday(){
      let transaction = tableHistory.filter(receipt => receipt.date === yesterday)
      setSelected({invoices: transaction, date: yesterday})
  }

//   function getWeek(){
//       let transaction = []
      
//   }

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
        <Button variant="primary" onClick={getTableHistory}>Today</Button>
        <Button variant="primary" onClick={getYesterday}>Yesterday</Button>
        {/* <Button variant="primary" onClick={getWeek}>Week</Button> */}
      </div>
      {selected.invoices.length === 0 ? (
      <div>Sorry no revenue to show. </div>
      ):(<Table striped bordered hover size="sm">
      <thead>
      Revenue from {selected.date}
        <tr>
          <th>Date</th>
          <th>Order #</th>
          <th>Order total</th>
        </tr>
      </thead>
      <tbody>
       {selected.invoices.map( select => (
          <tr>
            <td>{select.date}</td>
            <td>{select._id}</td>
            <td>{select.total_price}</td>
          </tr>

     ))}
        </tbody>
      </Table>)}
    </div>
  )
}


export default RevenueList;