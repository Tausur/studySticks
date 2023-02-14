import React from 'react'

const Navbar = ({Icon}) => {
  return (
    <div style={{'background': '#1d2a35'}} className='h-16 shadow-lg flex items-center pl-5'>
      <div className='h-14 w-14 pr-2 items-center pt-1 '>
        <img src={Icon} alt="" />
      </div>
      <p className='font-semibold text-xl'>StudySticks</p>
      <button className='bg-green-500 rounded-3xl px-8 py-3'>Sign Up</button>
    </div>
  )
}

export default Navbar