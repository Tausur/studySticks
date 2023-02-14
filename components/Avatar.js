import React from 'react'

const Avatar = ({avatar, Text}) => {
  return (
    <div className='flex items-center justify-center p-3 px-8 hover:bg-slate-600 rounded-md pb-6'>
        <div className='w-9 h-9 hover:cursor-pointer'>
            <img src={avatar} alt="" />
        </div>
        <p className='font-semibold hover:cursor-pointer pl-1 p-2'>{Text}</p>
    </div>
  )
}

export default Avatar