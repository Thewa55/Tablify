import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Line} from 'react-chartjs-2';


function RevenueChart(props){
  console.log("This props: ",props)
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
    setChart({...chart, labels: props.daysOfWeek, 
      datasets:[{data: [props.total.today, props.total.yesterday, props.total.threeDays, props.total.fourDays, props.total.fiveDays, props.total.sixDays, props.total.sevenDays]}]
      // datasets: {data: [props.total.today, props.total.yesterday, props.total.threeDays, props.total.fourDays, props.total.fiveDays, props.total.sixDays, props.total.sevenDays]}
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
