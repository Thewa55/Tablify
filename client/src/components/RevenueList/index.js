import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'
import Moment from 'react-moment';
import moment from 'moment';


function RevenueList(){
  const [tableHistory, setTableHistory] = useState([]);
//   const [today, setToday] = useState()
//   const [yesterday, setYesterday] = useState()
  const [todayTrans, setTodayTrans] = useState([])
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
        setTodayTrans(transaction)
    })
  };

  useEffect(() => {
    getTableHistory()
  }, []);

//   console.log(today)
//   console.log(yesterday)
  console.log(tableHistory)
  console.log(todayTrans)
  console.log(week)
  return(
    <div>
      This is the Revenue List. Today is {today}
      {todayTrans.length === 0 ? (<div>Sorry nothing today! </div>): (<div>You have stuff to render!</div>)}
    </div>
  )
}


export default RevenueList;