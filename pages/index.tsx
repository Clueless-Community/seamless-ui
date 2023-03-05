import React from 'react'
import Hero from "../components/Hero"
import Explore from "../components/Explore"
import Web from 'components/Web'
import Time from 'components/time'




const Home = () => {
  return (
    <div className='index-bg'>
      <Hero />
      <Explore />
      <Web />
      <Time />
    </div>
  )
}

export default Home
