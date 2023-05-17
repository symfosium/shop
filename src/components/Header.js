import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((item) => (
        <Order key={item.id} item={item} />
      ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Ostoskori on tyhjä</h2>
    </div>
  )
}
function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className="logo">House Stuff</span>
        <ul className="nav">
          <li>Meistä</li>
          <li>Yhteystiedot</li>
          <li>Ostoskori</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  )
}

export default Header
