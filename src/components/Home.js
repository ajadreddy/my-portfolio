import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
        <p className='name'>Hi, I'm Ajad Reddy.</p>
        <div className='below-name'>
            <h2>
                Front-end Engineer.Competitve Programmer.
            </h2>
            <p>Multidisciplinary designer who hacks at, makes and occasionally breaks things.</p>
            <p>Product Design Director on the team behind matrix.org.</p>
            <p>Less moody in real life. </p>
            <a href="/" style={{color:'blueviolet'}}>Learn More</a>
        </div>
    </div>
    </>
  )
}

export default Home