import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import moment from 'moment';
import Table from 'react-bootstrap/Table';
import CustomSearch from '../CustomSearch';
import InvoiceModal from '../InvoiceModal';
import RevenueChart from '../RevenueChart'
import { Link } from "react-router-dom";


function RevenueList(){
  const [tableHistory, setTableHistory] = useState([]);
  const [todayTrans, setTodayTrans] = useState([]);
  const [selected, setSelected] = useState({
    invoices:[],
    date: ""
  });

  const [total, setTotal]= useState({
    today: 0,
    yesterday: 0,
    threeDays: 0,
    fourDays: 0,
    fiveDays: 0,
    sixDays: 0,
    sevenDays: 0
  })

 
  const today = moment().format('L').toString();
  const yesterday = moment().subtract(1, 'day').format('L');
  const threeDays = moment().subtract(2,'day').format('L');
  const fourDays = moment().subtract(3,'day').format('L');
  const fiveDays = moment().subtract(4,'day').format('L')
  const sixDays = moment().subtract(5,'day').format('L')
  const sevenDays = moment().subtract(6,'day').format('L')
  const week = moment().subtract(7, 'day').format('L')

  const daysOfWeek = [today, yesterday, threeDays, fourDays, fiveDays, sixDays, sevenDays]
  
  function getTableHistory() {  
    API.getTableHistory()
      .then(results => {
        setTableHistory(results.data)
        let transaction = results.data.filter(receipt => receipt.date === today)
        setSelected({ invoices: transaction , date: today})
        setTodayTrans(transaction)
        // results.data.forEach(invoice =>{
        //   if(invoice.date === today){
        //     let todayTotal = total.today + invoice.total_price
        //     setTotal({today: todayTotal})
        //   } else if(invoice.date === yesterday){
        //     let yesterdayTotal = total.yesterday + invoice.total_price
        //     setTotal({yesterday: yesterdayTotal})
        //   } else if(invoice.date === threeDays){
        //     let threeDayTotal = total.threeDays + invoice.total_price
        //     setTotal({threeDays: threeDayTotal})
        //   } else if(invoice.date === fourDays){
        //     let fourDayTotal = total.fourDays + invoice.total_price
        //     setTotal({fourDays: fourDayTotal})
        //   } else if(invoice.date === fiveDays){
        //     let fiveDayTotal = total.fiveDays + invoice.total_price
        //     setTotal({fiveDays: fiveDayTotal})
        //   } else if(invoice.date === sixDays){
        //     let sixDayTotal = total.sixDays + invoice.total_price
        //     setTotal({sixDays: sixDayTotal})
        //   } else if(invoice.date === sevenDays){
        //     let sevenDayTotal = total.sevenDays + invoice.total_price
        //     setTotal({sevenDays: sevenDayTotal})
        //   }
        // })
      }
    )
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
  
  return(
    <div>
      <div>
        <button variant="primary" style={{width: "100px", margin: "1%"}} className="btn btn-primary" onClick={getToday}>Today</button>
        <button variant="primary" style={{width: "100px", margin: "1%"}} className="btn btn-primary" onClick={getYesterday}>Yesterday</button>
        <button variant="primary" style={{width: "100px", margin: "1%"}} className="btn btn-primary" onClick={getWeek}>Week</button>
        <CustomSearch userSearch={userSearch} />
        <RevenueChart daysOfWeek={daysOfWeek} tableHistory={tableHistory} />
        <Link to="/Account">
          <button className="login-button" style={{margin: "1%", marginLeft: "3%"}}>Account</button>
        </Link>
      </div>
      {selected.invoices.length === 0 ? (
      <div style={{fontFamily: "'Bebas Neue', cursive", fontSize: "22px", margin: "2%", marginLeft: "1%"}}>Sorry, there are no transactions for {selected.date}. </div>
      ):(<Table striped bordered hover size="sm">
      <thead style={{fontFamily: "'Bebas Neue', cursive", fontSize: "22px"}}>
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