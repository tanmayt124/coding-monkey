import React from 'react';
import Navbar from './components/Navbar_/Navbar';
import Welcome from './components/Welcome_/Welcome';
import Aboutme from './components/Aboutme_/Aboutme';
import Services from './components/Services_/Services';
import Contactme from './components/Contactme_/Contactme';
import Footer from './components/Footer_/Footer';

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