import React from 'react'
import Header from './components/Header'
import Navicon from './components/Navicon'
import Home from './components/Home'
import About from './components/About'
import Recipe from './components/Recipe'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-back overflow-x-hidden'>
      <Header />
      <Navicon />
      <Home />
      <About />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  )
}
