import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Hero from './components/Home/hero';
import Footer from './components/Footer';
import React from 'react';
import LoadingBar from 'react-top-loading-bar';
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
import Success from './components/Redirecting/Success';
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
import Protected from './components/Protected';
import Player from './components/Videos/Player';
import Chapters from './components/Videos/Chapters.jsx/Chapters';
import Lectures from './components/Videos/Subject/Lectures';
import AddTests from './components/Tests/AddTests';
import ViewTestSuper from './components/Tests/ViewTestSuper';
import ViewTestSuperBatch from './components/Tests/ViewTestSuperBatch';
import ViewTestStudent from './components/Tests/ViewTestStudent';
import ShowTestCards from './components/Tests/ShowTestCards';
import AddTestDetails from './components/Tests/AddTestDetails';
import ViewTestFaculty from './components/Tests/ViewTestFaculty';
import ViewTestAnalysis from './components/Tests/ViewTestAnalysis';
import ShowAnalysisCard from './components/Tests/ShowAnalysisCard';
import AnalysisForm from './components/Tests/AnalysisForm';
import AddSliderImages from './components/AddRemoveImages/AddSliderImages';
import AddTeacherImages from './components/AddRemoveImages/AddTeacherImages';
import ImageOptions from './components/AddRemoveImages/ImageOptions';
import RemoveSliderImages from './components/AddRemoveImages/RemoveSliderImages';
import RemoveTeacherImages from './components/AddRemoveImages/RemoveTeacherImages';
import AddCourse from './components/Videos/AddCourse';
import ViewCourses from './components/Videos/View/ViewCourses';


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
    // eslint-disable-next-line
  }, []);


  const loginContextparams = {
    email, 
    setEmail,
    userloggedin, 
    setUserloggedin,
    checkNavbarToLoad
  }

  const [progress, setProgress] = useState(0);

  return (
    
    <div>
      <div className="App bg-gray-100 font-lato">
      <BrowserRouter>
      <LoginContext.Provider value = {loginContextparams}>
      
      <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        height={4}
      />
      
      {checkNavbarToLoad()}

        <Routes>
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
          <Route path ="/login/admin" element = {<LoginSuperUser/>} />
          <Route path ="/contact" element = {<Contact setProgress ={setProgress}/>} />
          <Route path ="/about" element = {<AboutUsInfo/>} />
          <Route path ="/Courses" element = {<CoursesInfo/>} />
          <Route path ="/videos" element = {<Player/> } />
          <Route path ="/chapter" element = {<Chapters/> } />
          <Route path ="/lectures" element = {<Lectures/> } />
          

          {/* ------------------protected routes------------------- */}

          {/* /////////////////////Student Routes//////////////////////// */}
          <Route path ="/profile/student" element = {<Protected user="student" setProgress = {setProgress} Component={Student}/>} />

          <Route path ="/student/test" element = {<ViewTestStudent /> } />

          <Route path ="/upcoming-tests/student/:batchORsubject" element = {<Protected user="student" setProgress = {setProgress} Component={ShowTestCards} /> } />

          {/* JEE Student */}
          <Route path ="/watch/student/JEE" element = {<Protected user="admin" setProgress = {setProgress} Component={ViewJEE}/>} />
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
          
          
          {/* ////////////////////Faculty Routes ////////////////////// */}
          
          <Route path ="/upload-video" element = {<Protected user="faculty" setProgress = {setProgress} Component={Upload}/>} />
          <Route path ="/profile/faculty" element = {<Protected user="faculty" setProgress = {setProgress} Component={Faculty}/>} />
          <Route path ="/watch/faculty" element = {<Protected user="faculty" setProgress = {setProgress} Component = {ViewFaculty}/>} />
          <Route path ="/faculty/analysis" element = {<Protected user="faculty" setProgress={setProgress} Component={ViewTestAnalysis} /> } />
          <Route path ="/faculty/test" element = {<Protected user="faculty" setProgress={setProgress} Component={ViewTestFaculty} /> } />
          <Route path ="/upcoming-tests/faculty/:batchORsubject" element = {<Protected user="student" setProgress = {setProgress} Component={ShowTestCards} /> } />

          {/* /////////////////////Admin Routes//////////////////// */}

          <Route path ="/admin/addstudent" element = {<Protected user="admin" setProgress = {setProgress} Component={AddStudent}/>} />
          <Route path ="/admin/addfaculty" element = {<Protected user="admin" setProgress = {setProgress} Component={AddFaculty}/>} />
          <Route path ="/admin/deleteuser" element = {<Protected user="admin" setProgress = {setProgress} Component={DeleteUser}/>} />
          <Route path ="/addtest" element = {<Protected user="admin" setProgress={setProgress} Component ={AddTests}/> } />
          <Route path ="/addanalysis" element = {<Protected user="admin" setProgress = {setProgress} Component={AddTestDetails}/> } />
          <Route path ="/addcourses" element = {<Protected user="admin" setProgress = {setProgress} Component={AddCourse}/> } />
          <Route path ="/viewcourses" element = {<Protected user="admin" setProgress = {setProgress} Component={ViewCourses}/> } />
          <Route path ="/viewtest/admin" element = {<Protected user="admin" setProgress = {setProgress} Component={ViewTestSuper} /> } />
          <Route path ="/upcoming-tests/admin" element = {<Protected user="admin" setProgress = {setProgress} Component={ViewTestSuperBatch} /> } />
          <Route path ="/upcoming-tests/admin/:batchORsubject" element = {<Protected user="admin" setProgress = {setProgress} Component={ShowTestCards} /> } />
          <Route path ="/test-analysis-form" element = { <Protected user="admin" setProgress = {setProgress} Component={AnalysisForm}/>} />
          <Route path ="/viewanalysis" element = { <Protected user="admin" setProgress = {setProgress} Component={ShowAnalysisCard}/>} />

          <Route path ="/admin" element = { <Protected user="admin" setProgress = {setProgress} Component={SuperUser}/>} />
          <Route path ="/addimages" element = {<Protected Component = {ImageOptions} user="admin" setProgress={setProgress}/> } />
          <Route path ="/addsliderimages" element = {<Protected Component = {AddSliderImages} user="admin" setProgress={setProgress}/> } />
          <Route path ="/addteacherimages" element = {<Protected Component = {AddTeacherImages} user="admin" setProgress={setProgress}/> } />
          <Route path ="/removesliderimages" element = {<Protected Component = {RemoveSliderImages} user="admin" setProgress={setProgress}/> } />
          <Route path ="/removeteacherimages" element = {<Protected Component = {RemoveTeacherImages} user="admin" setProgress={setProgress}/> } />


          {/* ////////////////////// Success Redirects ////////////////////////// */}
          <Route path ="/success/:message" element = {<Success/> } />

        </Routes>
          <Footer/>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
