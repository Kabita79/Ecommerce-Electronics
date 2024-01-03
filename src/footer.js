import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import './footer.css'

const Footer = () => {
    const navigate = useNavigate();

    //navigating to homepage
    const goToHomePage = () => 
    {
        navigate('/');
    }

    //navigating to contactpage
    const goToContactPage = () =>
    {
        navigate('/contact');
    }

    //navigating to aboutpage
    const goToAboutPage = () =>
    {
        navigate('/about');
    }
    
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/Loogo.jpg' alt=''></img>
                </div>
                <div className='detail'>
                    <p>This is a E-commerce website designed and developed by @Kabita Banstola.</p>
                   
                    <div className='icon'>
                        
                        <li><BsFacebook  /></li>
                        
                        <li><BsInstagram /></li>
                        
                        <a href="https://www.twitter.com">
                        <li><FaTwitter className="social-icon" /></li>
                        </a>
                        <a href="https://www.youtube.com">
                        <li><FaYoutube className="social-icon" /></li>
                        </a>
                    </div>
                </div>
            </div>

            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li onClick={goToHomePage}>Home</li>
                    <li onClick={goToAboutPage}>About</li>
                    <li onClick={goToContactPage}>Contact</li>
                    <li>Terms & Conditions</li>

                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer