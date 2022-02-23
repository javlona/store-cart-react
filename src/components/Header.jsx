import React from 'react'
import Container from './style'


function Header() {
  return (
    <Container>
        <h1 className="header__logo">Online Store</h1>
        <ul className="header__links">
          <li>Sale</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Jewelry</li>
        </ul>
    </Container>
  )
}

export default Header