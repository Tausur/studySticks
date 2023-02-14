import React from 'react'
import { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { BsChevronDown, BsFillQuestionOctagonFill } from 'react-icons/bs'
import { VscSignIn } from 'react-icons/vsc'
import { FiSettings } from 'react-icons/fi'
import { FaBullhorn } from 'react-icons/fa'
import { CgProfile, CgLogOut } from 'react-icons/cg'
import Avatar from './Avatar';
import SidebarOption from './SidebarOption';
import AuthBar from './AuthBar';

const Sidebar = ({ Icon }) => {

    const [Profile, setProfile] = useState(false)

    const profileLog = () => {
        if (Profile == false) {
            setProfile(true)
        }
        else {
            setProfile(false)
        }
    }

    return (
        <div className='justify-center items-center'>
            <div className='hover:cursor-pointer flex justify-center items-center pb-6'>
                <img src={Icon} alt="" className='h-8 pr-2' />
                <p className='font-semibold'>Study Sticks</p>
            </div>
            <div>
                <div className='flex items-center'>
                    <div>
                        <div onClick={profileLog}>
                            <Avatar avatar={'/avatar.png'} Text={'Tausur Rahaman'} />
                        </div>
                        {Profile &&
                            <div>
                                <div className='flex p-2 px-12 hover:bg-slate-600 rounded-md'>
                                    <div className='text-2xl'>
                                        <CgProfile />
                                    </div>
                                    <p className='pl-2'>My Profile</p>
                                </div>
                                <div className='flex p-2 px-12 hover:bg-slate-600 rounded-md'>
                                    <div className='text-2xl'>
                                        <FiSettings />
                                    </div>
                                    <p className='pl-2'>Settings</p>
                                </div>
                                <div className='flex p-2 px-12 hover:bg-slate-600 rounded-md'>
                                    <div className='text-2xl'>
                                        <CgLogOut />
                                    </div>
                                    <p className='pl-2'>Logout</p>
                                </div>
                            </div>
                        }
                    </div>
                    <BsChevronDown />
                </div>
                <SidebarOption Icon={MdOutlineDashboard} Text={'DashBoard'} />
                <SidebarOption Icon={TbBrandGoogleAnalytics} Text={'Analytics'} />
                <AuthBar Icon={VscSignIn} Text={'Authentication'} />
                <SidebarOption Icon={FaBullhorn} Text={'Announcement'} />
                <SidebarOption Icon={BsFillQuestionOctagonFill} Text={'Problems'} />
            </div>
        </div>
    )
}

export default Sidebar