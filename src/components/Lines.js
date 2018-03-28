import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
  datasets: [
    {
      label: 'Temperature',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class Lines extends React.Component {

  render() {
    return <div className="gauge-container">
        <h2>Latest Readings</h2>
        <Line data={data} />
      </div>;
  }
};
