import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'
import Moment from 'react-moment';
import moment from 'moment';


function RevenueList(){
  const [tableHistory, setTableHistory] = useState([]);
  const [today, setToday] = useState()
  const [yesterday, setYesterday] = useState()
  const [todayTrans, setTodayTrans] = useState()

  function getTableHistory() {
    API.getTableHistory()
      .then(results => {
          console.log(results.data)
        setTableHistory(results.data.reverse())
        let transaction = tableHistory.filter(receipt => receipt.date === today)
        setTodayTrans(transaction)
    })
  };

  useEffect(() => {
    setToday(moment().format('L'));
    setYesterday(moment().subtract(1, 'day').format('L'))
    getTableHistory()
  }, []);

  console.log(todayTrans)
  console.log(yesterday)
  return(
    <div>
      This is the Revenue List. Today is {today}
      {todayTrans ? (<div>You have stuff to render!</div>):(<div>Sorry nothing today! </div>)}
    </div>
  )
}


export default RevenueList;