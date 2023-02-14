import React from 'react'
import { useState } from 'react';

const AuthBar = ({Icon, Text}) => {

    const [Auth, setAuth] = useState(false)

    const AuthLog = () => {
        if (Auth == false) {
            setAuth(true)
        }
        else {
            setAuth(false)
        }
    }

    return (
        <div className='flex p-5 px-10 hover:bg-slate-600 rounded-md' onClick={AuthLog}>
            <div className='text-2xl hover:cursor-pointer'>
                <Icon />
            </div>
            <p className='pl-2 font-semibold hover:cursor-pointer'>{Text}</p>
        </div>
    )
}

export default AuthBar