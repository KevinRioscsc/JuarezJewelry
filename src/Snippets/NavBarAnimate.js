import React, {useState} from 'react'
import NavBar from '../Component/HomePage/NavBar'
import Cart from '../Component/PopUps/ShoppingCart'

const NavBarAnimate = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
        <NavBar pressBtn={() => setNav((prev) => !prev)} />
      <Cart toggle={nav} setToggle={() => setNav((prev) => !prev)} />
    </>
  )
}

export default NavBarAnimate