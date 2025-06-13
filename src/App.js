// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

const App =() =>{
  let pageSize =10
  let api =process.env.REACT_APP_NEWS_KEY
  
  const [progress, setprogress] =useState(0)
 
  const setProgress=(progess)=>{
    setprogress(progess)
  }
  
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color="#f11946"
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>

            <Route exact path='/' element={<News api={api} setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/business' element={<News api={api} setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path='/sports' element={<News api={api} setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path='/health' element={<News api={api} setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path='/entertainment' element={<News api={api} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path='/science' element={<News api={api} setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route exact path='/technology' element={<News api={api} setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />

          </Routes>
        </Router>
        <div>

        </div>
      </>

    )
  
}

export default App