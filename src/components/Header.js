import React from 'react'

function Header() {
  return (
    <header>
      <div>
        <span className="logo">House Stuff</span>
        <ul className="nav">
          <li>Meistä</li>
          <li>Yhteystiedot</li>
          <li>Ostoskori</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  )
}

export default Header
