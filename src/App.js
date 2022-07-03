import React from 'react';
import Navbar from './components/Navbar_/Navbar';
import Welcome from './components/Welcome_/Welcome';
import Aboutme from './components/Aboutme_/Aboutme';
import Services from './components/Services_/Services';
import Contactme from './components/Contactme_/Contactme';
import Footer from './components/Footer_/Footer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBPdLuSnv3NxbZvb7QQLyxI4QPlUwXCsl0",
    authDomain: "codingmonkey-965a5.firebaseapp.com",
    projectId: "codingmonkey-965a5",
    storageBucket: "codingmonkey-965a5.appspot.com",
    messagingSenderId: "63785008302",
    appId: "1:63785008302:web:143b33e89ef1833e56813f",
    measurementId: "G-ZLSQP1PLCJ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App () {
    return(
        <>
            <Navbar/>
            <Welcome/>
            <Aboutme/>
            <Services/>
            <Contactme/>
            <Footer/>
        </>
    )
}

export default App