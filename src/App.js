import React, { Component } from 'react';
import Header from "./components/Header";
import Gauge from './components/Gauge';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentConditions: {},
      historicalData: [],
      recordHL: {
        temp: {
          l: 0,
          h: 100
        },
        pressure: {
          l: 0,
          h: 100
        },
        humidity: {
          l: 20.0,
          h: 32.01
        }
      },
      tempGaugeData: {
        labels: [0, 'Temp', 0],
        datasets: [
          {
            data: [],
            backgroundColor: ['#36A2EB', '#FF6384', '#000000'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
          }
        ]
      },
      pressureGaugeData: {
        labels: [0, 'Pressure', 0],
        datasets: [
          {
            data: [],
            backgroundColor: ['#36A2EB', '#FF6384', '#000000'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
          }
        ]
      },
      humidityGaugeData: {
        labels: [0, 'Humidity', 0],
        datasets: [
          {
            data: [],
            backgroundColor: ['#36A2EB', '#FF6384', '#000000'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
          }
        ]
      },
      alerts: {}
    };
    this.awsUrl = 'http://ec2-34-210-122-38.us-west-2.compute.amazonaws.com:3000';
  }

  componentDidMount() {
    this.getCurrentData();
    this.timer();
  }

  timer() {
    setInterval(() => {
      console.log('UPDATE');
      this.getCurrentData();
    }, 60000);
  }

  getCurrentData = () => {
    fetch(this.awsUrl)
      .then(response => response.json())
      .then(response => {
        this.setState({ currentConditions: response[0] });
        this.setTempGauge(this.state.currentConditions.tempf, this.state.recordHL.temp);
        this.setHumiGauge(this.state.currentConditions.humidity, this.state.recordHL.humidity);
        this.setPresGauge(this.state.currentConditions.baromin, this.state.recordHL.pressure);
      });
  };

  setTempGauge = (conditions, HL) => {
    var newValues = this.state.tempGaugeData;
    var min = 0; // starting, low end gauge value
    var indicator = conditions / HL.h * 100; // represent current condition as percent of the high
    var remainder = (HL.h - conditions) / HL.h * 100; // create the remainder object to fill up the rest of the chart
    newValues.datasets[0].data = [min, indicator, remainder];
    this.setState({ tempGaugeData: newValues });
    console.log('Temp Update: ', this.state.tempGaugeData.datasets);
    return newValues;
  };
  setPresGauge = (conditions, HL) => {
    var newValues = this.state.pressureGaugeData;
    var min = 0; // starting, low end gauge value
    var indicator = conditions / HL.h * 100; // represent current condition as percent of the high
    var remainder = (HL.h - conditions) / HL.h * 100; // create the remainder object to fill up the rest of the chart
    newValues.datasets[0].data = [min, indicator, remainder];
    this.setState({ pressureGaugeData: newValues });
    console.log('Pres Update: ', this.state.pressureGaugeData.datasets);
    return newValues;
  };
  setHumiGauge = (conditions, HL) => {
    var newValues = this.state.humidityGaugeData;
    var min = 0; // starting, low end gauge value
    var indicator = conditions / HL.h * 100; // represent current condition as percent of the high
    var remainder = (HL.h - conditions) / HL.h * 100; // create the remainder object to fill up the rest of the chart
    newValues.datasets[0].data = [min, indicator, remainder];
    this.setState({ humidityGaugeData: newValues });
    console.log('Humi Update: ', this.state.pressureGaugeData.datasets);
    return newValues;
  };

  render() {
    return <div className="App">
        <Header />
        <p className="App-intro">Welcome to your sensor dashboard.</p>
        <div className="gauge-wrapper">
          <Gauge title={'Current Temperature'} data={this.state.tempGaugeData} currentData={this.state.currentConditions.tempf} HL={this.state.recordHL.temp} />
          <Gauge title={'Current Humidity'} data={this.state.humidityGaugeData} currentData={this.state.currentConditions.humidity} HL={this.state.recordHL.humidity} />
          <Gauge title={'Current Pressure'} data={this.state.pressureGaugeData} currentData={this.state.currentConditions.baromin} HL={this.state.recordHL.pressure} />
        </div>
        {/* <Tabs /> */}
        {/* <Footer /> */}
      </div>;
  }
}

export default App;
