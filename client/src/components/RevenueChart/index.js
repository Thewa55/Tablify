// import React from 'react';
// import {Line} from 'react-chartjs-2';
// import moment from 'moment';

// function RevenueChart (){
//   const today = moment().format('L').toString();
//   const yesterday = moment().subtract(1, 'day').format('L');
//   const threeDays = moment().subtract(2,'day').format('L');
//   const fourDays = moment().subtract(3,'day').format('L');
//   const fiveDays = moment().subtract(4,'day').format('L')
//   const sixDays = moment().subtract(5,'day').format('L')
//   const sevenDays = moment().subtract(6,'day').format('L')
// }
import React from 'react';
import {Line} from 'react-chartjs-2';
import moment from 'moment';


const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class RevenueChart extends React.Component {
  render() {
    
    const today = moment().format('L').toString();
    const yesterday = moment().subtract(1, 'day').format('L');
    const threeDays = moment().subtract(2,'day').format('L');
    const fourDays = moment().subtract(3,'day').format('L');
    const fiveDays = moment().subtract(4,'day').format('L')
    const sixDays = moment().subtract(5,'day').format('L')
    const sevenDays = moment().subtract(6,'day').format('L')
    console.log(today)
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
