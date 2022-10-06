import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Home/hero';
import Footer from './components/Footer';
import React from 'react';
import Content from './components/Home/content';
import Director from './components/Home/director';
import Products from './components/Home/products';
import LoginSuperUser from './components/Login/LoginSuperUser';
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar/Navbar'
import NavbarSuperUser from './components/Navbar/NavbarSuperUser';
import AboutUsInfo from './components/NavbarExtentsion/AboutUsInfo';
import CoursesInfo from './components/NavbarExtentsion/CoursesInfo';
import Slider from './components/ImageSlider/Slider' 
import LoginCheck from './components/Login/LoginCheck';
import SuperUser from './components/superuser/SuperUser';
import AddUser from './components/superuser/AddUser';
import DeleteUser from './components/superuser/DeleteUser';
import LoginFaculty from './components/Login/LoginFaculty';
import LoginStudent from './components/Login/LoginStudent';
import Logout from './components/Logout/Logout';

import {LoginContext} from './components/Contexts/LoginContext'
import { useState } from 'react';


function App() {
  const [email, setEmail] = useState("");
  const[SuperUserloggedIn, setSuperUserLoggedIn] = useState(false);

  // Checks which navbar to load
  const checkNavbarToLoad = ()=>{
    if(SuperUserloggedIn){
      console.log("SuperUser is = ");
      console.log(SuperUserloggedIn);
      return <NavbarSuperUser/>;
    }else{
      console.log("SuperUser is = ");
      console.log(SuperUserloggedIn);
      return <Navbar/>;
    }

  }

  return (
    
    <div>
      <div className="App bg-gray-100 font-lato">
      <BrowserRouter>
      <LoginContext.Provider value = {{ email, setEmail, SuperUserloggedIn, setSuperUserLoggedIn}}>
      
      {checkNavbarToLoad()}

        <Routes>
          
          <Route path = "/" element={
          <div >
              <Slider/><Hero/> <Content/> <Director/><Products/>
          </div>
          }/>
          
          <Route path ="/login" element = {<LoginCheck/>} />
          <Route path ="/login/student" element = {
            <LoginStudent/>
          } />

          <Route path ="/login/teacher" element = {<LoginFaculty/>} />
          <Route path ="/logout" element = {<Logout/>} />
          <Route path ="/admin" element = { SuperUserloggedIn ? <SuperUser/> : <LoginSuperUser/>} />
          <Route path ="/login/admin" element = {<LoginSuperUser/>} />
          
          <Route path ="/contact" element = {<Contact/>} />
          <Route path ="/about" element = {<AboutUsInfo/>} />
          <Route path ="/Courses" element = {<CoursesInfo/>} />
          <Route path ="/admin/adduser" element = {<AddUser/>} />
          <Route path ="/admin/deleteuser" element = {<DeleteUser/>} />
        </Routes>
        <Footer/>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
