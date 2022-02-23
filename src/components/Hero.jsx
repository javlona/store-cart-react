import React from 'react'
import Container from './style'
import heroImg from '../assets/hero.png'

function Hero() {
  return (
    <Container>
        <img src={heroImg} alt="sale banner" />
    </Container>
  )
}

export default Hero