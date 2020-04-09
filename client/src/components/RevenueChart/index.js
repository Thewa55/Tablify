import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Line} from 'react-chartjs-2';


function RevenueChart(props){
  console.log(props)
  const [show, setShow] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

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
    let todayTotal = 0
    let yesterdayTotal = 0
    let twoD = 0
    let threeD = 0
    let fourD = 0
    let fiveD = 0
    let sixD = 0
    
    props.tableHistory.forEach(invoice =>{
      if(invoice.date === props.daysOfWeek[0]){
        todayTotal = todayTotal + invoice.total_price
      } else if(invoice.date === props.daysOfWeek[1]){
        console.log("Invoice date", invoice.date, " yesterday's date", props.daysOfWeek[1])
        yesterdayTotal = yesterdayTotal + invoice.total_price
      } else if(invoice.date === props.daysOfWeek[2]){
        twoD = twoD + invoice.total_price       
      } else if(invoice.date === props.daysOfWeek[3]){
        threeD = threeD + invoice.total_price
      } else if(invoice.date === props.daysOfWeek[4]){
        fourD = fourD + invoice.total_price
      } else if(invoice.date === props.daysOfWeek[5]){
        fiveD = fiveD + invoice.total_price
      } else if(invoice.date === props.daysOfWeek[6]){
        sixD = sixD + invoice.total_price
      }
    })

    console.log("Today's total --",todayTotal)
    console.log("Yesterday's total --",yesterdayTotal)
    setChart({...chart, labels: props.daysOfWeek, 
      datasets:[{data: [todayTotal, yesterdayTotal, twoD, threeD, fourD, fiveD, sixD]}]
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
            display:false,
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
