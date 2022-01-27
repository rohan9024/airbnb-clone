import React from 'react';
import { GlobeAltIcon } from "@heroicons/react/outline";

function Footer() {
    return (
        <div className='flex flex-col bg-gray-100 tracking-tight'>
            <div className=' flex mt-10 space-x-36 mx-24 mb-12'>
                <div className='flex flex-col space-y-3'>
                    <div className='font-bold tracking-tight text-gray-800'>
                        <h1>Support</h1>
                    </div>
                    <div className='font-normal text-gray-700 space-y-3'>
                        <h1>Help Centre</h1>
                        <h1>Safety information</h1>
                        <h1>Cancellation options</h1>
                        <h1>Our COVID-19 Response</h1>
                        <h1>Supporting people with disabilities</h1>
                        <h1>Report a neighbourhood concern</h1>
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <div className='font-bold tracking-tight text-gray-800'>
                        <h1>Community</h1>
                    </div>
                    <div className='font-normal text-gray-700 space-y-3'>
                        <h1>Airbnb.org: disaster relief housing</h1>
                        <h1>Support Afghan refugees</h1>
                        <h1>Celebrating diversity & belonging</h1>
                        <h1>Combating discrimination</h1>
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <div className='font-bold tracking-tight text-gray-800'>
                        <h1>Hosting </h1>
                    </div>
                    <div className='font-normal text-gray-700 space-y-3'>
                        <h1>Try hosting</h1>
                        <h1>AirCover: protection for Hosts</h1>
                        <h1>Explore hosting resources</h1>
                        <h1>Visit our community forum</h1>
                        <h1>How to host responsibly</h1>
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <div className='font-bold tracking-tight text-gray-800'>
                        <h1>About</h1>
                    </div>
                    <div className='font-normal text-gray-700 space-y-3'>
                        <h1>Newsroom</h1>
                        <h1>Learn about new features</h1>
                        <h1>Letter from our founders</h1>
                        <h1>Careers</h1>
                        <h1>Investors</h1>
                        <h1>Airbnb Luxe</h1>
                    </div>
                </div>
            </div>
           <div className='w-full h-[1px] bg-gray-200' />

            <div className='flex justify-between mx-24 mt-12 mb-12'>
                <div className='flex space-x-2'>
                    <h1>© 2022 Airbnb, Inc.</h1>
                    <h1 className='cursor-pointer'>· Privacy</h1>
                    <h1 className='cursor-pointer'>· Terms</h1>
                    <h1 className='cursor-pointer'>· Sitemap</h1>
                    <h1 className='cursor-pointer'>· Company details</h1>
                </div>
                <div className='flex flex-end space-x-12 '>
                    <div className='flex justify-center items-center space-x-2 cursor-pointer'>
                        <GlobeAltIcon className=' h-5 ' />
                        <h1 className='underline font-normal'>English (INR)</h1>
                    </div>
                    <div className='flex justify-center items-center space-x-2 cursor-pointer'>
                        <div>
                            <h1>₹</h1>
                        </div>
                        <div>
                            <h1 className='underline'>INR</h1>
                        </div>
                    </div>
                    <div className='flex justify-between items-center space-x-4'>
                        <img className='h-5 object-contain cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="" />
                        <img className='h-5 object-contain cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" alt="" />
                        <img className='h-5 object-contain cursor-pointer' src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128212.png?token=exp=1643190766~hmac=34611c33a7eff5d1d2cef75254c6b8c3" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
