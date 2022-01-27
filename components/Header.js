import Image from 'next/image';
import React from 'react';
import { SearchIcon } from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <div className='bg-black '>
            <header className='grid grid-cols-8 sticky top-0 z-50 shadow-md p-5 md:px-10 bg-black'>
                {/* Left */}
                <div className='col-span-2 relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        layout='fill'
                        objectFit='contain'
                        objectPosition="left"
                    />
                </div>
                {/* Mid  */}
                <div className='col-span-4 flex-col flex '>
                    <div className='flex text-lg font-normal justify-center space-x-12 items-center flex-grow'>
                        <h1 className='text-white '>Places to Stay</h1>
                        <h1 className='text-white '>Experiences</h1>
                        <h1 className='text-white '>Online Experiences</h1>
                    </div>

                </div>

                {/* Right */}
                <div className='col-span-2 flex justify-evenly items-center'>
                    <div>
                        <h1 className='text-white font-bold tracking-tight'>Become a host</h1>
                    </div>
                    <div className='hover:bg-gray-600'>
                        <GlobeAltIcon className='text-white h-5 hover:bg-gray-600 hover:rounded-full cursor-pointer' />
                    </div>
                    <div className='flex justify-center items-center bg-white space-x-5 p-2 rounded-full'>
                        <MenuIcon className="h-5 w-5 text-black cursor-pointer  hover:ease-in-out hover:duration-100 hover:scale-125 space-y-0" />
                        <img src="https://avatarfiles.alphacoders.com/161/thumb-161485.png" className="h-10 hover:ease-in-out hover:duration-100 hover:scale-125 cursor-pointer rounded-full text-black" />
                    </div>
                </div>

            </header>
            <div className='flex justify-around space-x-12 items-center p-4 rounded-full bg-white w-2/3 ml-72'>
                <div className='flex flex-col text-black'>
                    <h1 className='flex-start text-sm font-semibold'>Location</h1>
                    <h3 className='text-gray-500 font-thin '>Where are you going?</h3>
                </div>
                <div className='border-r-2 border-gray-200 h-10' />
                <div className=' flex flex-col text-black'>
                    <h1 className='text-sm font-semibold'>Check in</h1>
                    <h3 className='text-gray-500 font-thin '>Add dates</h3>
                </div>
                <div className='border-r-2 border-gray-200 h-10' />
                <div className=' flex flex-col text-black'>
                    <h1 className='text-sm font-semibold'>Check out</h1>
                    <h3 className='text-gray-500 font-thin '>Add dates</h3>
                </div>
                <div className='border-r-2 border-gray-200 h-10' />
                <div className=' flex flex-col text-black'>
                    <h1 className='text-sm font-semibold'>Guests</h1>
                    <h3 className='text-gray-500 font-thin '>Add guests</h3>
                </div>
                <div className='border-r-2 border-gray-200 h-10' />
                <div>
                    <SearchIcon className='hidden h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2' />
                </div>
            </div>
        </div>
    );
}

export default Header;
