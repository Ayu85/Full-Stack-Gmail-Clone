import React from 'react'
import { Grip, HelpCircleIcon, Menu, UserCircle } from 'lucide-react';
import logo from '../assets/logo.png'
import { Search } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { Settings } from 'lucide-react';

const Header = ({tooglebar,bar}) => {
    return (
        <div className="navbar select-none py-1 flex justify-between bg-lightgray px-4">

            <div className="space-x-3 cursor-pointer">
                <Menu onClick={()=>tooglebar(!bar)}/>
                <img src={logo} alt="logo" className='w-24  cursor-pointer' />

            </div>
            <div className="relative -ml-96" >
                <input type="text" placeholder="Search" className=" rounded-xl focus:bg-white transition-all outline-none bg-[#eaf1fb] pl-12  h-10 w-[500px]" />
                <Search className='absolute left-4 size-5 text-gray '/>
                <SlidersHorizontal className='absolute right-4 size-5 text-gray'/>
            </div>
            <div className='space-x-6 text-gray cursor-pointer'>
                <HelpCircleIcon />
                <Settings/>
                <Grip/>
                <UserCircle/>
            </div>


        </div>
    )
}

export default Header
