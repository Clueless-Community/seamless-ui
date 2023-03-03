import React from 'react'
import Hero from "../components/Hero"
import Explore from "../components/Explore"
import Web from 'components/Web'




const Home = () => {
  return (
    <div className='index-bg'>
      <Hero />
      <Explore />
      <Web />
    </div>
  )
}

export default Home
