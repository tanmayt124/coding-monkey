import React from 'react'

const Services = () => {
  return (
  <>
    <div className='container-flex' style={{background: '#2e66bf', height: '30px', marginTop: '10px', marginBottom: '10px'}}>
      <center>
        <h5 style={{color: 'white', justifyContent: 'center', alignItems: 'center', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 24}}>Services</h5>
      </center>
    </div>
    <div className='container-fluid' style={{backgroundColor: '#e0e0e0', padding: '30px'}}>
      <div className='row'>
        <div className='col-sm-3 order-md-1' style={{background: '#e0e0e0', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 26}}>
            <div className="card" style={{width: 'auto', height: '100%'}}>
              <div className="card-body">
                <h3 className="card-title" style={{color: '#2e66bf'}}><b>Mobile App Development</b>     <i className="fa-brands fa-android"></i> <i className="fa-solid fa-mobile-screen"></i></h3>
                <p className="card-text" style={{fontSize: 20, textAlign: 'justify'}}>I'm able to develope any mobile app as per the user requiremnt </p>
              </div>
            </div>
        </div>
        <div className='col-sm-3 order-md-2' style={{background: '#e0e0e0', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 26}}>
          <div className="card" style={{width: 'auto', height: '100%'}}>
            <div className="card-body">
              <h3 className="card-title" style={{color: '#2e66bf'}}><b>Web App Development</b>      <i className="fa-brands fa-internet-explorer"></i></h3>
              <p className="card-text" style={{fontSize: 20, textAlign: 'justify'}}>I'm able to develope any web app as per the user requiremnt </p>
            </div>
          </div>
        </div>
        <div className='col-sm-3 order-md-3 ' style={{background: '#e0e0e0', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 26}}>
            <div className="card" style={{width: 'auto', height: '100%'}}>
              <div className="card-body">
                <h3 className="card-title" style={{color: '#2e66bf'}}><b>Testing & Debugging</b>    <i className="fa-solid fa-bug"></i></h3>
                <p className="card-text" style={{fontSize: 20, textAlign: 'justify'}}>I'm able to test or debug any mobile app or web app as per the requiremnt </p>
              </div>
            </div>
        </div>
        <div className='col-sm-3 order-md-4' style={{background: '#e0e0e0', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 26}}>
            <div className="card" style={{width: 'auto', height: '100%'}}>
              <div className="card-body">
                <h3 className="card-title" style={{color: '#2e66bf'}}><b>Review or Documentation</b> <i className="fa-solid fa-magnifying-glass-dollar"></i></h3>
                <p className="card-text" style={{fontSize: 20, textAlign: 'justify'}}>I'm able to review or do documentation of any software as per the user requiremnt </p>
              </div>
            </div>
        </div> 
      </div>
    </div>
  </>
  )
}

export default Services