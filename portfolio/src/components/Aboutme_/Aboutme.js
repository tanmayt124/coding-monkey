import React from 'react'
import aboutmepic from './../../assets/aboutmepic.JPG'
const Aboutme = () => {
  return (
    <>
    <div className='container-flex' style={{background: '#2e66bf', height: '30px', marginTop: '1px', marginBottom: '10px'}}>
      <center>
        <h5 style={{color: 'white', justifyContent: 'center', alignItems: 'center', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 24}}>About Me</h5>
      </center>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-4 order-md-1' style={{background: '#e0e0e0', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 26}}>
          <>
            <div style={{margin: 10, textAlign: 'justify'}}>
              <h2 style={{color: '#2e66bf'}}><b>My Qualifications</b></h2>
              <h6><a href='https://www.facebook.com/groups/175883569217695'>1). Secondary School Certificate (SSC) - S. K. Pantwalawalkar High School, Kurla, Mumbai.</a></h6><br/>
              <h6><a href='https://www.vpt.edu.in' style={{textAlign: 'justify'}}>2). Diploma - Vidyalankar Polytechnic, Wadala, Mumbai.</a></h6><br/>
              <h6><a href='https://www.pvppcoe.ac.in/' style={{textAlign: 'justify'}}>3). B.E. in Computer Engineering - Vasantdada Patil Pratishthan's College of Engineering, Sion - Chunnabhatti, Mumbai.</a></h6>
            </div>
          </>        
        </div>
        <div className='col-md-2 order-md-2' style={{background: '#e0e0e0'}}>
          <>
            <center>
              <img src={aboutmepic} width='180px' height='310px' alt="It's just me.."></img>
            </center>
          </>        
        </div>
        <div className='col-md-6 order-md-2' style={{background: '#e0e0e0', fontSize: 19}}>
          <>
            <p style={{textAlign: 'justify', fontFamily: 'Tiro Gurmukhi, serif', color: '#2e66bf', margin: 10}}>Hi there! Myself 
              <b> Tanmay Rajesh Thakur</b>, I'm currently pursuing last year of <b>Bachelor of Engineering from 
                Vasantdada Patil College of Engneering, Sion, Mumbai, Maharashtra, India.</b> 
              Currently, I'm seeking a good position in a good organizations where, I can confidently 
              accept new challenges and give my best to solve them! Also, I'm  a good listener and passionate about implementing 
              and launching new projects. Ability to translate business requirements into technical solutions. 
              Looking to start the career as an entry-level software engineer.
            </p>
          </>        
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutme