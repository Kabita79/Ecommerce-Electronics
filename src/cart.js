import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';


import './cart.css'

const Cart = ({cart, setCart}) => {
    // increase qty
    const incqty =(product) =>
    {
        const exsit =cart.find((x) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) =>
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm
        }))
    }

    // decrease qty
    const decqty =(product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === product.id
        })

        //Ensure qty doesnot go below 0
        const newQty = Math.max (exsit.qty - 1, 0)

        setCart(cart.map((curElm) =>
        {
            return curElm.id === product.id ? {...exsit, qty: newQty } : curElm
        }))
    
    }

    //remove product from cart
    const removeproduct = (product) =>
    {
        const exsit =cart.find((x) =>
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setCart(cart.filter((x) =>
            {
                return x.id !== product.id
            }))
        }
    }

    //Total price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)

    //payment integration
    

  return (
    <>
    <div className='card_container'>
        {
            cart.length ===0 &&
            <div className='emptycart'>
                <h2 className='empty'>Cart is Empty.</h2>
                <Link to='/product' className='emptycartbtn'>Shop Now</Link>
            </div>
        }

        <div className='content'>
            {
                cart.map((curElm) =>
                {
                    return(
                        <div className='cart_item' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{curElm.Cat}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>Price: Rs.{curElm.Price}</p>
                                
                                <div className='qty'>
                                    <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                    <input type='text' value={curElm.qty}></input>
                                    <button className='incqty' onClick={() => incqty(curElm)}>+</button>
                                </div>
                                <h4 className='subtotal'>Sub Total: Rs.{curElm.Price * curElm.qty}</h4>
                                </div>

                                <div className='close'>
                                <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>Total: Rs. {Totalprice}</h2>
            <button className='checkout' type='button'  >Checkout</button>
            </>
        }
        
    </div>
    </>
  )
}

export default Cart