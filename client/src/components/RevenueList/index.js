import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import Button from 'react-bootstrap/Button'
// import Table from 'react-bootstrap/Table'
import Moment from 'react-moment';
import moment from 'moment';


function RevenueList(){
  const [tableHistory, setTableHistory] = useState([]);
  const [today, setToday] = useState()

//   getTableHistory()
//     // API.getTableHistory()
//     //   .then(results => {
//     //     setTableHistory(results.data)
//     // })
//   };

  useEffect(() => {
    setToday(moment().format('L'));
    // getTableHistory()
  }, []);

  console.log(today)
  return(
    <div>
      This is the Revenue List. Today is {today}
    </div>
  )
}


export default RevenueList;