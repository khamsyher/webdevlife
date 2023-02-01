import React from 'react'
import Logo from '../../../img/Logo.png'

function Nav() {
  return (
    <div>
      <nav className='bg-slate-500 flex space-x-96 w-full'>
        <div className='justify-center pl-60'>
          <img src={Logo} alt=""/>
        </div>
        <ul className='flex flex-auto'>
          <li className='text-white pl-6 pl-60'><a href='/#'>Home</a></li>
          <li className='text-white pl-6'><a href='/about'>About</a></li>
          <li className='text-white pl-6'><a href='/pricing'>Pricing</a></li>
          <li className='text-white pl-6'><a href='/contact'>Contact Us</a></li>
          <li className='text-white pl-6'><a href='/login'>Login</a></li>
          <button className="text-white border-solid border-2 rounded-full ">Start free trial</button>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
