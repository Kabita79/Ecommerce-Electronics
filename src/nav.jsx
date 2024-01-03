import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';

import { useAuth0 } from "@auth0/auth0-react";

import { Link } from 'react-router-dom';

import './nav.css'
const Nav = ({searchbtn}) => {
   const [search, setSearch] = useState()
   const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='free'>
          <div className='icon'>
          <FaTruckMoving />
          </div>
          <p>FREE Shipping when upto Rs.1,000</p>
    </div>
    <div className='main_header'>
      <div className='container'>
        <div className='logo'>
          <img src=' .\img\Loogo.jpg' alt='LOGO' ></img>
          
        </div>
        <div className='search_box'>
          <input type='text' value={search} placeholder='Search Product You Want...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
          <button onClick={() => searchbtn (search)}>Search</button>
        </div>

        <div className='icon'>
          {
            isAuthenticated &&
            (
              <div className='account'>
              <div className='user_icon'>
                < FaRegUser />
              </div>
              <p> Hello! {user.name} </p>
              </div>
            )        
          }
          
          <div className='second_icon'>
          <Link to="/" className='link'>< AiOutlineHeart /></Link>
          <Link to="/cart" className='link'>< BsBagCheck /></Link>
          </div>
        </div>

      </div>
    </div>

    <div className='header'>
      <div className='container'>
        <div className='nav'>
        <ul>
          <li>
            <Link to='/' className='link'>Home</Link>
          </li>
          <li>
            <Link to='/Product' className='link'>Product</Link>
          </li>
          <li>
            <Link to='/About' className='link'>About</Link>
          </li>
          <li>
            <Link to='/Contact' className='link'>Contact</Link>
          </li>
        </ul>
        </div>

        <div className='auth'> 
          {
            isAuthenticated ?
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><FiLogOut /></button>
            :
            <button onClick={() => loginWithRedirect()}><FiLogIn /></button>
          }
        </div>
      </div>

    </div>
    </>
  )
}

export default Nav