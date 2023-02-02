import React from 'react'
import Logo from '../../../img/Logo.png'

function Nav() {
  return (
    <div>

      <header className='container mx-auto max-w-6xl mt-8'>
          <nav className='flex justify-between items-center'>
            <div className='flex-shrink-0 ml-10 cursor-point'>
              <img src={Logo}  alt="logo"/>
            </div>
            <ul className='flex'>
              <li className='flex ml-8 p-1 text-black font-medium'>
                <a href='/about'>About</a>
              </li>
              <li className='flex ml-8 p-1 text-black font-medium'>
                <a href='/pricing'>Pricing</a>
              </li>
              <li className='flex ml-8 p-1 text-black font-medium'>
                <a href='/contrat'>Contract Us</a>
              </li>
              <li className='flex ml-8 p-1 text-black font-medium'>
                <a href='/login'>Login</a>
              </li>
              <button type="button" className="border-solid border-2 border-violet-700  rounded-full ml-8 px-3  text-violet-700">Start free trial</button>
            </ul>

          </nav>

      </header>
      {/* <nav className='bg-slate-500 flex space-x-96 w-full'>
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
      </nav> */}
    </div>
  )
}

export default Nav
