import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Line} from 'react-chartjs-2';


function RevenueChart(props){
  const [show, setShow] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  // const [total, setTotal]= useState({
  //   today: 0,
  //   yesterday: 0,
  //   threeDays: 0,
  //   fourDays: 0,
  //   fiveDays: 0,
  //   sixDays: 0,
  //   sevenDays: 0
  // })
  // const [today, setToday] = useState()
  // const [yesterday, setYesterday] = useState()
  const [chart, setChart] = useState({
    labels: [],
    datasets: [{
      label: 'Dollars',
      Fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: []}
    ]
  })

  
  function setPage() {
    // let todayTotal = 0
    // let yesterdayTotal = 0
    // // let twoD = 0
    // // let threeD = 0
    // // let fourD = 0
    // // let fiveD = 0
    // // let sixD = 0
    // // let sevenD = 0
    
    // props.tableHistory.forEach(invoice =>{
    //   if(invoice.date === props.daysOfWeek[0]){
    //     // console.log("Invoice date", invoice.date, " today's date", props.daysOfWeek[0])
    //     todayTotal = todayTotal + invoice.total_price
    //     setTotal({...total, today: todayTotal})
    //   } else if(invoice.date === props.daysOfWeek[1]){
    //     console.log("Invoice date", invoice.date, " yesterday's date", props.daysOfWeek[1])
    //     yesterdayTotal = yesterdayTotal + invoice.total_price
    //     console.log(yesterdayTotal, " Yesterday's total")
    //     setTotal({...total, yesterday: yesterdayTotal})
    //   } else if(invoice.date === props.daysOfWeek[0]){
    //     let threeDayTotal = total.threeDays + invoice.total_price
    //     setTotal({threeDays: props.daysOfWeek[0]})
    //   } else if(invoice.date === props.daysOfWeek[0]){
    //     let fourDayTotal = total.fourDays + invoice.total_price
    //     setTotal({fourDays: fourDayTotal})
    //   } else if(invoice.date === props.daysOfWeek[0]){
    //     let fiveDayTotal = total.fiveDays + invoice.total_price
    //     setTotal({fiveDays: fiveDayTotal})
    //   } else if(invoice.date === props.daysOfWeek[0]){
    //     let sixDayTotal = total.sixDays + invoice.total_price
    //     setTotal({sixDays: sixDayTotal})
    //   } else if(invoice.date === props.daysOfWeek[0]){
    //     let sevenDayTotal = total.sevenDays + invoice.total_price
    //     setTotal({sevenDays: sevenDayTotal})
    //   }
    // })
    setChart({...chart, labels: props.daysOfWeek, 
      // datasets:[{data: [props.total.today, props.total.yesterday, props.total.threeDays, props.total.fourDays, props.total.fiveDays, props.total.sixDays, props.total.sevenDays]}]
      // datasets:[{data: [total.today, total.yesterday, total.threeDays, total.fourDays, total.fiveDays, total.sixDays, total.sevenDays]}]
    })
    handleShow()
  }
  
  return(
    <>
      <button variant="primary" style={{width: "100px", margin: "1%"}} className="btn btn-primary" onClick={setPage}>
        Chart
      </button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>7-Day Revenu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Line
        data={chart}
        options={{
          title:{
            display:true,
            text:'Weekly Revenue',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </>
  )
}

export default RevenueChart;
