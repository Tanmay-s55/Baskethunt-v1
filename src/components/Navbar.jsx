import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[100px] py-[40px]'>
        {/* BasktHunt logo */}
        <div className=''>
            <img src='/BH logo.png' />
        </div>
        {/* Options */}
        <div className='flex items-center justify-evenly w-[989px] h-[44px] font-semibold'>
            <h2>HOME</h2>
            <h2>HUSTLE SERVICES</h2>
            <h2>WHO ARE YOU?</h2>
            <h2>ACCELERATE ASSISTANCE</h2>
            <h2>OUR VIBES</h2>
            <h2>GET IN TOUCH</h2>
        </div>
        {/* Login Button */}
        <div className='rounded-[10px] border border-solid border-[#FF7A3D] px-[32px] py-[8px] cursor-pointer font-bold hover:bg-[#FF7A3D] hover:text-white ease-in-out'>
            <button>LOGIN</button>
        </div>
    </div>
  )
}

export default Navbar;