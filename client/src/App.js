import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Header from './component/site/Header';
import Nav from './component/site/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/site/Home';
import Catchall from './component/site/Catchall';
import Test from './component/site/Test';

function App() {
  const [header, setHeader] = useState('Site Header!')

  return (
    <>
      <Header header={header}/>
      <Nav/>
      <main>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Catchall setHeader={setHeader}/>}/>
          <Route exact path='/' element={<Home setHeader={setHeader}/>}/> 
          <Route exact path='/test' element={<Test setHeader={setHeader}/>}/> 
        </Routes>
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;

// npm i axios react-router-dom
