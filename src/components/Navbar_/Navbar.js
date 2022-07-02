import React from 'react';
import image1 from './../../assets/logonav.png';

function Navbar(){
  return(
    <nav className="navbar fixed-top navbar-light navbar-expand-sm " style={{backgroundColor: '#2e66bf'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href='#navbar'> 
          <img src={image1} width={190} height={70} style={{padding: 0}} alt='Coding Monkey'/> 
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./../Welcome_/#welcome" style={{fontSize: 23, color: 'white', padding: 15, fontFamily: 'Tiro Gurmukhi, serif'}}>Welcome</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./../Aboutme_/#aboutme" style={{fontSize: 23, color: 'white', padding: 15, fontFamily: 'Tiro Gurmukhi, serif'}}>About Me</a>
            </li>
            <li className="nav-item">                  
              <a className="nav-link" href="#services" style={{fontSize: 23, color: 'white', padding: 15, fontFamily: 'Tiro Gurmukhi, serif'}}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactme" style={{fontSize: 23, color: 'white', padding: 15, fontFamily: 'Tiro Gurmukhi, serif'}}>Contact Me</a>
            </li>
          </ul>
      
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{padding: 5}}>
              <a href='https://www.instagram.com/tanmaythakur_1112' style={{color: '#E1306C'}}><i className="fa-brands fa-instagram fa-2x"></i></a>
            </li>
            <li className="nav-item" style={{padding: 5}}>
              <a href='https://discord.com/users/573522786639937537' style={{color: '#02099c'}}><i className="fa-brands fa-discord fa-2x"></i></a>
            </li>
            <li className="nav-item" style={{padding: 5}}>
              <a href='https://github.com/tanmayt124' style={{color: '#404040'}}><i className="fa-brands fa-github fa-2x"></i></a>
            </li>
            <li className="nav-item" style={{padding: 5}}>
              <a href='https://twitter.com/tanmayt124' style={{color: '#2483ff'}}><i className="fa-brands fa-twitter fa-2x"></i></a>
            </li>
            <li className="nav-item" style={{padding: 5}}>
              <a href='https://www.facebook.com/profile.php?id=100009167896362' style={{color: '#003882'}}><i className="fa-brands fa-facebook fa-2x"></i></a>
            </li>
            <li className="nav-item" style={{padding: 5}}>
              <a href='https://www.linkedin.com/in/tanmay-thakur-29b685241/' style={{color: '#006fff'}}><i className="fa-brands fa-linkedin fa-2x"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar