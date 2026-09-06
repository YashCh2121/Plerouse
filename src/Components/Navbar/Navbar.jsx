import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-15 py-5'>
        <div className='text-5xl font-bold'>Plerouse</div>
        <div className='flex text-xl justify-center items-center list-none gap-12 font-semibold '>
            <li>Personal</li>
            <li>Features</li>
            <li>Cards</li>
            <li>Wealth</li>
        </div>
        <button className='border border-black rounded-full text-white bg-black p-3 pl-5 pr-5 font-semibold'>Open Account</button>
    </div>
  )
}

export default Navbar