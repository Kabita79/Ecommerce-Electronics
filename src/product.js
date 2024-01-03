import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";


import Productdetail from './productdetail'
import './product.css'

const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => 
{


    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const filterproduct = (product) =>
    {
        const update = Productdetail.filter((x) =>
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () =>
    {
        setProduct(Productdetail);
    }

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

    
    <div className='products'>
        <h2># Products</h2>
        <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filterproduct ("Tablet")}>Tablet</li>
                        <li onClick={() => filterproduct ("Headphone")}>Headphone</li>
                        <li onClick={() => filterproduct ("Smart Watch")}>Smart Watch</li>
                        <li onClick={() => filterproduct ("Camera")}>Camera</li>
                        <li onClick={() => filterproduct ("Electronics")}>Electronics</li>
                        <li onClick={() => filterproduct ("Gaming")}>Gaming</li>
                    </ul>
                </div>               
            </div>

            <div className='productbox'>
                <div className='content'>
                    {
                        product.map((curElm) =>
                        {
                            return(
                                <>
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
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Product