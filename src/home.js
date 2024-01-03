import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { BsTruck } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";


import Homeproduct from './homeproduct';
import './home.css'

const  Home = ({detail, view, close, setClose, addtocart}) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
    {
        close ?
        <div className='product_detail'>
          <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) =>
                {
                    return(
                        <div className='productbox'>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>This is one of the best and comfortable product. You will be appriciated. </p>
                                <h3>Rs.{curElm.Price}</h3>
                                {
                                    isAuthenticated ?
                                    <button onClick={() => addtocart (curElm)}>Add To Cart</button>
                                    :
                                    <button onClick={() => loginWithRedirect ()}>Login for Add to Cart</button>
                                }
                            </div>                
                        </div>

                    )
                })
            }
            <div className='productbox'></div>        
          </div>
        </div> : null
    }

    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Exclusive Note Book Collection 2023</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis iusto, enim laudantium quae consequuntur sapiente dolores nam.</p>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src=' ./img/slider-img.png' alt='sliderimg'></img>
            </div>
        </div>
    </div>

    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src=' ./img/mobile.jpg' alt='mobile'></img>
                </div>
                <div className='detail'>
                    <p>45 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src=' ./img/headphones.jpg' alt='headphone'></img>
                </div>
                <div className='detail'>
                    <p>15 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src=' ./img/smartwatch.jpg' alt='smartwatch'></img>
                </div>
                <div className='detail'>
                    <p>42 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src=' ./img/camera.jpg' alt='camera'></img>
                </div>
                <div className='detail'>
                    <p>10 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src=' ./img/airpods.jpg' alt='airpod'></img>
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div> 

        </div>
    </div>

    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <BsTruck />
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order Above Rs.1000</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <FaRupeeSign />
                </div>
                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Guarentee</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <CiPercent />
                </div>
                <div className='detail'>
                    <h3>Membership Discount</h3>
                    <p>On every Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BiHeadphone />
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
    </div>

    <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm) =>
                {
                    return(
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    {
                                        isAuthenticated ?
                                        <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                        :
                                        <li onClick={() => loginWithRedirect ()}><AiOutlineShoppingCart /></li>
                                    }
                                    
                                    <li onClick={() => view (curElm)}><AiOutlineEye /></li>
                                    <li><AiOutlineHeart /></li>
                                </div>
                            </div>
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>Rs.{curElm.Price}</h4>
                            </div>
                        </div>                       
                    )
                })
            }            
        </div>
    </div>

    <div className='banner'>
        <div className='container'>
            <div className='detail'>
                <h4>LATEST TECHNOLOGY ADDED</h4>
                <h3>Apple iPad 10.2 9th Gen -2022</h3>
                <p>Rs. 897</p>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/slider-img.png' alt='sliderimg'></img>
            </div>
        </div>        
    </div>

    </>
  )
}

export default Home