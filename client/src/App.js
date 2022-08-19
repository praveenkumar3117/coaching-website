import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Home/hero';
import Footer from './components/Footer';
import React from 'react';
import Content from './components/Home/content';
import Director from './components/Home/director';
import Products from './components/Home/products';
import Login from './components/Login/login';
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar/Navbar'
import AboutUsInfo from './NavbarExtentsion/AboutUsInfo';
import CoursesInfo from './NavbarExtentsion/CoursesInfo';

function App() {
  return (
    <div className="App bg-gray-100 font-lato">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = "/" element={<div><Hero/> <Content/> <Director/><Products/> </div>}/>
          
          <Route path ="/login" element = {<Login/>} />
          <Route path ="/contact" element = {<Contact/>} />
          <Route path ="/about" element = {<AboutUsInfo/>} />
          <Route path ="/Courses" element = {<CoursesInfo/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
