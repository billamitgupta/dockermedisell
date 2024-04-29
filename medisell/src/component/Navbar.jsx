import React from 'react'
import '../style/navbar.css'
import Button from '@mui/material/Button';
import { Outlet,Link } from 'react-router-dom'
import logo from '../../src/image/logo.gif'


function Navbar() {
  return (
    < >
   <nav className='w-full h-16 bg-gradient-to-r from-indigo-500 flex iteam-center justify-between px-4 md:px4 ' >
    {/* Image */}
    <img className='h-12  flex  justify-start '  src={logo} alt=""  />
    <ul className='md:flex hidden font-semibold mt-5 pr-10' >
        <li className='mx-[10px] cursor-pointer text-xl text-black dark:text-sky-700'><Link to="/">Home</Link></li>
        <li className='mx-[10px] cursor-pointer text-xl text-black dark:text-sky-700'><Link to="/company">Company</Link></li>
        <li className='mx-[10px] cursor-pointer text-xl text-black dark:text-sky-700'><Link to="/product">Product</Link></li>
        <li className='mx-[10px] cursor-pointer text-xl text-black dark:text-sky-700'><Link to="/aboutus">AboutUs</Link></li>
    </ul>
   <div className='my-2  display:flex justify-end flex   '>
   <div>
   <Link to="/signin"> <Button  variant="contained" disableElevation>
      SignIn/Login
    </Button></Link>
   </div>
    {/* <div>
      <Link><li className='4xl' >&#8801; </li></Link>
    </div> */}
   </div>
   </nav>
   <Outlet/>
   </>
  )
}

export default Navbar
