import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutMe from './components/AboutMe/AboutMe'
import MyServices from './components/MyServices/MyServices'
import LatestWork from './components/LatestWork/LatestWork'
import Contact from './components/Contact/Contact'

const App = () => {
  return (

    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <MyServices />
      <LatestWork />
      <Contact />
    </>


  )
}

export default App