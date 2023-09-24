import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { SearchIcon } from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
    const [show, handleShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 2) {
                handleShow(true);
            } else handleShow(false);
        });

    }, []);

    return (
        <div className='bg-black flex flex-col'>
            <div className=''>
                <header className={`grid grid-cols-8 fixed top-0 z-50 shadow-md p-5 md:px-10 w-full bg-black ${show && 'bg-white '}`}>
                    {/* Left */}
                    <div className='col-span-2 relative flex items-center h-10 cursor-pointer my-auto'>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
                            layout='fill'
                            objectFit='contain'
                            objectPosition="left"
                        />
                    </div>

                    {/* Mid */}
                    {show ?
                        (
                            <div className=' w-full col-span-4 flex justify-center items-center'>
                                <div className='flex justify-between items-center border-2 rounded-full w-64 h-12 '>
                                    <h1 className='ml-6 font-semibold text-normal text-black'>Start your search</h1>
                                    <SearchIcon className='hidden h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2' />
                                </div>
                            </div>
                        ) :
                        (<div className={`col-span-4 flex-col flex ${show || ' transition scale-105 ease-in-out duration-300 delay-150'} ${show && 'transition scale-0 duration-300 ease-in-out delay-150'}`}>
                            <div className='flex text-lg font-normal justify-center space-x-12 items-center flex-grow text-white'>
                                <h1 className=''>Places to Stay</h1>
                                <h1 className=''>Experiences</h1>
                                <h1 className=''>Online Experiences</h1>
                            </div>
                        </div>)

                    }


                    {/* Right */}
                    <div className='col-span-2 flex justify-evenly items-center'>
                        <div>
                            <h1 className={`text-white font-semibold tracking-tighter ${show && 'text-black'}`}>Become a host</h1>
                        </div>
                        <div className=''>
                            <GlobeAltIcon className={`text-white h-5 hover:animate-spin cursor-pointer ${show && 'text-black'}`} />
                        </div>
                        <div className='flex justify-center items-center bg-white space-x-5 p-2 rounded-full'>
                            <MenuIcon className="h-5 w-5 text-black cursor-pointer space-y-0" />
                            <img src="https://avatarfiles.alphacoders.com/161/thumb-161485.png" className="h-10 hover:animate-bounce cursor-pointer rounded-full text-black" />
                        </div>
                    </div>

                </header >
            </div>
            <div className={'bg-black'}>

                <div className={show ? 'mt-24 flex justify-around space-x-12 items-center p-4 rounded-full bg-white w-2/3 ml-72 scale-0 transition ease-in-out duration-300 delay-150' : 'mt-24 flex justify-around space-x-12 items-center p-4 rounded-full bg-white w-2/3 ml-72 scale-100 transition ease-in-out duration-300 delay-150'}>
                    <div className='flex flex-col text-black cursor-pointer '>
                        <h1 className='flex-start text-sm font-semibold'>Location</h1>
                        <h3 className='text-gray-500 font-thin '>Where are you going?</h3>
                    </div>
                    <div className='border-r-2 border-gray-200 h-10' />
                    <div className=' flex flex-col text-black cursor-pointer'>
                        <h1 className='text-sm font-semibold'>Check in</h1>
                        <h3 className='text-gray-500 font-thin '>Add dates</h3>
                    </div>
                    <div className='border-r-2 border-gray-200 h-10' />
                    <div className=' flex flex-col text-black cursor-pointer'>
                        <h1 className='text-sm font-semibold'>Check out</h1>
                        <h3 className='text-gray-500 font-thin '>Add dates</h3>
                    </div>
                    <div className='border-r-2 border-gray-200 h-10' />
                    <div className=' flex flex-col text-black cursor-pointer'>
                        <h1 className='text-sm font-semibold'>Guests</h1>
                        <h3 className='text-gray-500 font-thin '>Add guests</h3>
                    </div>
                    <div className='border-r-2 border-gray-200 h-10' />
                    <div>
                        <SearchIcon className='hidden h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2' />
                    </div>
                </div>
            </div >
        </div>

    );
}

export default Header;
