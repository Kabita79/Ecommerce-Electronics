import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Home from './home'
import Product from './product'
import Cart from './cart'
import Contact from './contact'
import Footer from './footer'

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} searchbtn={searchbtn} />}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} searchbtn={searchbtn} />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />

    </Routes>
    </>
  )
}

export default Rout
