import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function RevenueList(){
  const [tableHistory, setTableHistory] = useState([]);

  function getTableHistory(){
    API.getTableHistory()
      .then(results => {
        setTableHistory(results.data)
      })
  }


  return(
    <div>
      This is the Revenue List
    </div>
  )
}


export default RevenueList;