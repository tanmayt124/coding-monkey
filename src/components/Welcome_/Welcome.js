import React from 'react'
import BackImg from './../../assets/welcomebgimg.jpg'

const Welcome = () => {
  return (
    <>
    <div className='d-flex p-2' id='#welcome'>
      <article>
        <img src={BackImg} alt='Yeah It was me here!' width = '100%' style={{position: 'relative', marginTop: '95px'}}/>
        <div className='container' style={{background: '#2e66bf',position: 'absolute', right: '10px', top: '130px', width: 'auto', height: 'auto', textAlign: 'right', padding: 10}}>
          <h2 style={{fontFamily: 'Tiro Gurmukhi, serif', color: 'white'}}>
            Welcome to my portfolio!
          </h2>
          <h3 style={{fontFamily: 'Tiro Gurmukhi, serif', color: 'white'}}>
            I'm a fresher and eagar to explore the outside world!
          </h3>
        </div>
      </article>
    </div>
    </>
    
  )
}

export default Welcome