import React from 'react'
import Logo from '../Images/Logo.jpg'
import { Nav } from './Nav'
import "../Styles/Header.css"
export const Header = () => {
  return (
    <div className='header'>
        <img className='logoH' src={Logo}></img>
        <Nav/>
    </div>
  )
}
