import React from 'react'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-center py-3'>
        <img src={Logo} alt='Logo'/>
    </div>
  )
}

export default Header