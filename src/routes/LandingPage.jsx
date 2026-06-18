import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import AtmosphereBackground from '../components/AtmosphereBackground'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary/30 selection:text-white relative">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
      <AtmosphereBackground />
    </div>
  )
}
