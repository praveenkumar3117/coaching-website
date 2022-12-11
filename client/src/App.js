import './App.css';
import { Routes, Route } from "react-router-dom";
import Hero from './components/Home/hero';
import Footer from './components/Footer';
import React from 'react';
import { useState, useEffect } from 'react';
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
import NavbarStudent from './components/Navbar/NavbarStudent';
import AddStudent from './components/superuser/AddStudent';
import AddFaculty from './components/superuser/AddFaculty';
import Mailsent from './components/Redirecting/Mailsent';
import Upload from './components/Videos/Upload';
import NavbarFaculty from './components/Navbar/NavbarFaculty';
import ViewFaculty from './components/Videos/View/ViewFaculty';
import ViewJEE from './components/Videos/View/ViewJEE';
import ViewNEET from './components/Videos/View/ViewNEET';
import ViewFoundation from './components/Videos/View/ViewFoundation';
import Student from './components/Profile/Student';
import Faculty from './components/Profile/Faculty';
import Physics from './components/Videos/Subject/Physics';
import Chemistry from './components/Videos/Subject/Chemistry';
import Maths from './components/Videos/Subject/Maths';
import Biology from './components/Videos/Subject/Biology';
import Layout from './components/Layout';
import Protected from './components/Protected';

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
  }, [data?.userloggedin])
  
  const checkNavbarToLoad = ()=>{
    try{

      if(userloggedin === 0){ // 0 for superuser
        return <NavbarSuperUser/>;
      }else if(userloggedin === 1){ // 1 for Student
        return <NavbarStudent/>;
      }else if(userloggedin === 2){ // 2 for faculty
        return <NavbarFaculty/>;
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

  // const navigate = useNavigate();

  return (
    
    <div>
      <div className="App bg-gray-100 font-lato">
      {/* <BrowserRouter> */}
      <LoginContext.Provider value = {loginContextparams}>
      
      {checkNavbarToLoad()}

        <Routes>
          <Route path="/" element={<Layout/>}>
          {/* ---------------------------public routes ---------------------------*/}
          <Route path = "/" element={
          <div>
              <Slider/><Hero/> <Content/> <Director/><Products/>
          </div>
          }/>
          <Route path ="/login" element = {<LoginCheck/>} />
          <Route path ="/login/student" element = {<LoginStudent/>} />
          <Route path ="/login/teacher" element = {<LoginFaculty/>} />
          <Route path ="/logout" element = {<Logout/>} />
          <Route path ="/admin" element = { <Protected user="admin" Component={SuperUser}/>} />
          <Route path ="/login/admin" element = {<LoginSuperUser/>} />
          <Route path ="/contact" element = {<Contact/>} />
          <Route path ="/about" element = {<AboutUsInfo/>} />
          <Route path ="/Courses" element = {<CoursesInfo/>} />

          {/* ------------------protected routes------------------- */}

          <Route path ="/upload-video" element = {<Protected user="faculty" Component={Upload}/>} />
          <Route path ="/profile/student" element = {<Protected user="student" Component={Student}/>} />
          <Route path ="/profile/faculty" element = {<Protected user="faculty" Component={Faculty}/>} />
          {/* Faculty */}
          <Route path ="/watch/faculty" element = {<Protected user="faculty" Component = {ViewFaculty}/>} />
          {/* JEE Student */}
          <Route path ="/watch/student/JEE" element = {<Protected user="student" Component={ViewJEE}/>} />
          <Route path ="/watch/student/JEE/Physics" element = {<Protected user="student" batch="JEE" Component={Physics}/>} />
          <Route path ="/watch/student/JEE/Chemistry" element = {<Protected user="student" batch="JEE" Component={Chemistry}/>} />
          <Route path ="/watch/student/JEE/Maths" element = {<Protected user="student" batch="JEE" Component={Maths}/>} />
          {/* NEET Student */}
          <Route path ="/watch/student/NEET" element = {<Protected user="student" Component={ViewNEET}/>} />
          <Route path ="/watch/student/NEET/Physics" element = {<Protected user="student" batch="NEET" Component={Physics}/>} />
          <Route path ="/watch/student/NEET/Chemistry" element = {<Protected user="student" batch="NEET" Component={Chemistry}/>} />
          <Route path ="/watch/student/NEET/Biology" element = {<Protected user="student" batch="NEET" Component={Biology}/>} />
          {/* Foundation Student */}
          <Route path ="/watch/student/Foundation" element = {<Protected user="student" Component={ViewFoundation}/>} />
          <Route path ="/watch/student/Foundation/Physics" element = {<Protected user="student" batch="Foundation" Component={Physics}/>} />
          <Route path ="/watch/student/Foundation/Chemistry" element = {<Protected user="student" batch="Foundation" Component={Chemistry}/>} />
          <Route path ="/watch/student/Foundation/Maths" element = {<Protected user="student" batch="Foundation" Component={Maths}/>} />
          <Route path ="/watch/student/Foundation/Biology" element = {<Protected user="student" batch="Foundation" Component={Biology}/>} />
          
          <Route path ="/admin/addstudent" element = {<Protected user="admin" Component={AddStudent}/>} />
          <Route path ="/admin/addfaculty" element = {<Protected user="admin" Component={AddFaculty}/>} />
          <Route path ="/admin/deleteuser" element = {<Protected user="admin" Component={DeleteUser}/>} />

          {/* Success Redirects */}
          <Route path ="/mailsent" element = {<Mailsent/> } />

          </Route>
          
        </Routes>
        <Footer/>
        </LoginContext.Provider>
      {/* </BrowserRouter> */}
    </div>
    </div>
  );
}

export default App;
