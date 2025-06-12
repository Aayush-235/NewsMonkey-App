// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

export default class App extends Component {
  pageSize = 10
  api = process.env.REACT_APP_NEWS_KEY
  // api = '05fd7748f49b470586c98325578ce0f6'
  state={
    progess : 0
  }
  setProgress=(progess)=>{
    this.setState({progess: progess})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color="#f11946"
            progress={this.state.progess}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>

            <Route exact path='/' element={<News api={this.api} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path='/business' element={<News api={this.api} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path='/sports' element={<News api={this.api} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path='/health' element={<News api={this.api} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path='/entertainment' element={<News api={this.api} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path='/science' element={<News api={this.api} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path='/technology' element={<News api={this.api} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />

          </Routes>
        </Router>
        <div>

        </div>
      </>

    )
  }
}
