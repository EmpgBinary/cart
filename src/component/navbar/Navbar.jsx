import React from 'react'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'


const Navbar = ({size, setShow}) => {
  return (
    <nav>
    <div className='navbar'>
        <span className='my-shop' onClick={() => setShow(true) }>
          My Shopping
          </span>
      <div className="cart" onClick={()=>setShow(setShow)}>
        <span>
          <i className='fas fa=cart-plus'><ShoppingCart/></i>
          </span>
          <span>{size}</span>
      </div>
        </div>
</nav>
  
  )
}

export default Navbar