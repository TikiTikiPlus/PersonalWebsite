import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Portfolio from './Pages/Portfolio';
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Link } from "react-router-dom";
import Navbar from './components/navbar';
import about_me from './Pages/about_me';
import ctf_creations from './Pages/CTF_creations';

const Index = () =>
  {
    return(
      
      <div className='Index'>
      <Navbar /> {/* This line will render the navbar */}
      <div id='about_me' className='sections'> 
      <div className='container'>
        <div className='section-header'><p className='section-title'>About Me:</p></div>
          <div className='section-content'> 
          <p>Hello There! I am a Software Engineering graduate at Waikato University, 
            looking to secure a full-time position in Software Engineering. 
            I have a good understanding of Programming, Data Analysis, Networking, 
            Cloud, Defensive Cybersecurity, and Pentesting due to my experiences from 
            hobbies and different university papers. I’m a team player, energetic, and 
            enjoy learning new things to broaden my skillset. I also have programming experience in Python, 
            Java and C#.</p>
            </div>
        </div>
      </div>
      <div id ='portfolio' className='sections'>
      <div className='container'>
      <div className='section-header'>
      
      <p className='section-titles'>Portfolios:</p>
      </div> 
      <div className='section-content'>
        <p>Here are the lists of projects that I have done throughout my life</p>
        <Link to="/portfolio">View Portfolio</Link>
      </div>
      </div>
      </div>
      <div id='interests' className='sections'>
        <div className='container'>
        <div className='section-header'><p className='section-title'>Interests:</p>
        </div>
      <div className='section-content'>
      <p>I am interested in a lot of things. I have an interest in hiking, eating, cybersecurity, 

      </p>
      </div>
      </div>
      </div>
      <div id='write_ups' className='sections'>
      <div className='container'>
      <div className='section-header'>
        <p className='section-title'>Write Ups</p>
      </div>
      
      <div className='section-content'>
      <p>Here is a section where I create the write ups of the challenges I have completed over the years.
      </p>
      <p>ToDo: Maybe create a function where you create an auto writer or something similar.</p>
      </div>
      </div>
      </div>
      <div id='ctfs' className='sections'>
        <div className='container'>
        <div className='section-header'>
        <p className='section-title'>Capure the flag creations:</p>
        </div>
        <div>
        <p>This is the section where I place all of the CTFs I try and crete to learn about their vulnerabilities and 
        experience them myself. 
        </p>
        </div>
        </div>
      </div>
      </div>
    )
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default Index;
reportWebVitals();
