// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  c = 'aayush'
  render() {
    return (
      <>
        <div>
          <Navbar />
          <News pageSize={6} country="us" category="science"/>
        </div>
      </>

    )
  }
}
