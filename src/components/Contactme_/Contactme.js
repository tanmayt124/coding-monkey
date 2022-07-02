import React from 'react'

const Contactme = () => {
  return (
    <>
    <div className='container-flex' style={{background: '#2e66bf', height: '30px', marginTop: '10px', marginBottom: '10px'}}>
      <center>
        <h5 style={{color: 'white', justifyContent: 'center', alignItems: 'center', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 24}}>Contact Me</h5>
      </center>
    </div>
    <div className='container-fluid' style={{backgroundColor: '#e0e0e0', padding: '30px'}}>
    <div className='row'>
        <div className='col-lg-5 order-md-1' style={{background: '#e0e0e0', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 26}}>
            <div className="card" style={{width: 'auto', height: '100%'}}>
              <div className="card-body">
                <h3 className="card-title" style={{color: '#2e66bf', textAlign: 'justify'}}> 
                  I'm looking for new opportunities where I can explore my abilities and give my best.
                  Willing to work with on any large/small projects. Contact me if you need me!<br/>
                  Email: tanmayrc.thakur@gmail.com
                </h3>
              </div>
            </div>
        </div>
        <div className='col-lg order-md-2' style={{background: '#e0e0e0', fontFamily: 'Tiro Gurmukhi, serif', fontSize: 26}}>
          <div className="card" style={{width: 'auto', height: '100%'}}>
            <div className="card-body">
              <label style={{color: '#2e66bf', textAlign: 'justify'}}>Please fill the following form: </label>
              <div className="mb-3" style={{paddingTop: 10}}>
                <input type='text' className='form-control' id='contactName' placeholder='Enter your name.' style={{color: '#2e66bf'}}></input>
              </div>
              <div className="mb-3">
                <input type='email' className='form-control' id='contactEmail' placeholder='Enter your email.' style={{color: '#2e66bf'}}></input>
              </div>
              <div className="mb-3">
                <div className='row' style={{paddingLeft: 12, paddingRight: 12}}>
                  <input type='phone' className='form-control' id='contactEmail' placeholder='Enter your phone no.' style={{color: '#2e66bf'}}></input>
                </div>
              </div>
              <div style={{width: '30%', marginLeft: 'auto'}}>
                <input type='submit' className='form-control' id='contactSubmit' value='Submit' style={{color: '#2e66bf'}}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Contactme