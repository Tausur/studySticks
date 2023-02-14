import React from 'react'

const SidebarOption = ({Icon, Text}) => {
  return (
    <div className='flex p-5 px-10 hover:bg-slate-600 rounded-md'>
        <div className='text-2xl hover:cursor-pointer'>
            <Icon/>
        </div>
        <p className='pl-2 font-semibold hover:cursor-pointer'>{Text}</p>
    </div>
  )
}

export default SidebarOption