// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Home/hero';
import Footer from './components/Footer';
import React from 'react';
import Content from './components/Home/content';
import Director from './components/Home/director';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App bg-gray-100">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = "/" element={<div><Hero/> <Content/> <Director/></div>}/>
          
          <Route path ="/add" element = {<h1>Hello</h1>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
