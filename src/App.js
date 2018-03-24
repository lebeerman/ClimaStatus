import React, { Component } from 'react';
import logo from './logo.svg';
import Gauge from './components/Gauge.js';
import './App.css';




class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        data: {
          title: 'job',
          sensor: 'stuff',

        },

        };
    }
  
  render() {
    return <div className="App">
        <Header />
        <p className="App-intro">Welcome to your sensor dashboard.</p>
        <div>
          <Gauge data={this.state} />
          <Gauge data={this.state} />
          <Gauge data={this.state} />
        </div>
        <Tabs />
        <Footer />
      </div>;
  }
}

export default App;
