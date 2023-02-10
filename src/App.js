import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import About from './components/About';
import GoTop from './components/GoTop';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App =()=> {
  const pageSize = 3;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');

 const toggle = () => {
    if (mode === 'light') {
     setMode('dark');
      document.body.style.backgroundColor = "rgb(0 4 20)";
    } else {
     setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
    return (
      <>
        <Router>
          <Navbar mode={mode} toggle={toggle} />
          <LoadingBar color='#f11946'progress={progress}/>
          <Routes>
            <Route exact path='/about' element={<About mode={mode} toggle={toggle} />}></Route>
            <Route exact path='/' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="Any" pageSize={pageSize} category='Any' />}></Route>
            <Route exact path='/Any' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="Any" pageSize={pageSize} category='Any' />}></Route>
            <Route exact path='/Programming' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="Programming" pageSize={pageSize} category='Programming' />}></Route>
            <Route exact path='/Miscellaneous' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="Miscellaneous" pageSize={pageSize} category='Miscellaneous' />}></Route>
            <Route exact path='/Dark' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="Dark" pageSize={pageSize} category='Dark' />}></Route>
            <Route exact path='/Pun' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="Pun" pageSize={pageSize} category='Pun' />}></Route>
            <Route exact path='/Spooky' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="Spooky" pageSize={pageSize} category='Spooky' />}></Route>
            <Route exact path='/Christmas' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="Christmas" pageSize={pageSize} category='Christmas' />}></Route>
          </Routes>
        </Router>
        <GoTop/>
      </>
    )
}
export default App;

