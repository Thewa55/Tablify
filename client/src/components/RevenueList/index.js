import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'
import Moment from 'react-moment';


function RevenueList(){
  const [tableHistory, setTableHistory] = useState([]);
  const [today, setToday] = useState()
  const []

  function getTableHistory(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    setToday(today)

    API.getTableHistory()
      .then(results => {
        setTableHistory(results.data)
    })

    
  };

  useEffect(() => {
    getTableHistory()
  }, []);

  console.log(today)
  return(
    <div>
      This is the Revenue List. Today is {today}
    </div>
  )
}


export default RevenueList;