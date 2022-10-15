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
import DeleteUser from './components/superuser/DeleteUser';
import LoginFaculty from './components/Login/LoginFaculty';
import LoginStudent from './components/Login/LoginStudent';
import Logout from './components/Logout/Logout';
import {LoginContext} from './components/Contexts/LoginContext'
import { useState } from 'react';
import { useEffect } from 'react';
import NavbarStudent from './components/Navbar/NavbarStudent';
import AddStudent from './components/superuser/AddStudent';


function App() {
  const [email, setEmail] = useState("");

  // Checks which navbar to load
  const log = localStorage.getItem("data");
  const data = JSON.parse(log);
  
  const [userloggedin, setUserloggedin] = useState(-1);
  
  useEffect(()=>{
    if(data?.userloggedin===0){ 
      setUserloggedin(0);
    }else if(data?.userloggedin===1){
      setUserloggedin(1);
    }else if(data?.userloggedin===2){
      setUserloggedin(2);
    }
  })
  
  const checkNavbarToLoad = ()=>{
    try{

      if(userloggedin === 0){ // 0 for superuser
        return <NavbarSuperUser/>;
      }else if(userloggedin === 1){ // 1 for Student
        return <NavbarStudent/>;
      }else if(userloggedin === 2){ // 2 for faculty
        return <Navbar/>;
      }else{
        return <Navbar/>;
      }
    }catch(err){
      console.log(err);
    }
      
  }

  useEffect(()=>{
    checkNavbarToLoad();
  }, []);

  const loginContextparams = {
    email, 
    setEmail,
    userloggedin, 
    setUserloggedin,
    checkNavbarToLoad
  }

  return (
    
    <div>
      <div className="App bg-gray-100 font-lato">
      <BrowserRouter>
      <LoginContext.Provider value = {loginContextparams}>
      
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
          <Route path ="/admin" element = { userloggedin===0 ? <SuperUser/> : <LoginSuperUser/>} />
          <Route path ="/login/admin" element = {<LoginSuperUser/>} />
          
          <Route path ="/contact" element = {<Contact/>} />
          <Route path ="/about" element = {<AboutUsInfo/>} />
          <Route path ="/Courses" element = {<CoursesInfo/>} />
          <Route path ="/admin/addstudent" element = {<AddStudent/>} />
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
