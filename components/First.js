import React from 'react';

function First() {
    return (
        <div className='mx-20 space-y-12'>
            <div className='text-gray-800'>
                <h1 className='text-4xl font-semibold mt-20'>Inspiration for your next trip</h1>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col justify-center items-center hover:scale-105 ease-in-out duration-200 cursor-pointer '>
                    <img className='rounded-t-lg' src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320" alt="lonavala" />
                    <div className='rounded-b-lg w-80 bg-rose-600 text-white space-y-4 h-36 '> 
                        <h1 className='text-4xl font-semibold mt-6 ml-10'>Lonavala</h1>
                        <h1 className='text-lg ml-10'>66 kilometres away</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center hover:scale-105 ease-in-out duration-200 cursor-pointer '>
                    <img className='rounded-t-lg' src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=320" alt="Alibaug" />
                    <div className='rounded-b-lg w-80 bg-pink-700 text-white space-y-4 h-36  '>
                        <h1 className='text-4xl font-semibold mt-6 ml-10'>Alibaug</h1>
                        <h1 className='text-lg ml-10'>36 kilometres away</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center hover:scale-105 ease-in-out duration-200 cursor-pointer '>
                    <img className='rounded-t-lg' src="https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=320" alt="Calangute" />
                    <div className='rounded-b-lg w-80 bg-purple-900 text-white space-y-4 h-36  '>
                        <h1 className='text-4xl font-semibold mt-6 ml-10'>Calangute</h1>
                        <h1 className='text-lg ml-10'>396 kilometres away</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center hover:scale-105 ease-in-out duration-200 cursor-pointer '>
                    <img className='rounded-t-lg' src="https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_w=320" alt="Karjat" />
                    <div className='rounded-b-lg w-80 bg-red-500 text-white space-y-4 h-36  ' >
                        <h1 className='text-4xl font-semibold mt-6 ml-10'>Karjat</h1>
                        <h1 className='text-lg ml-10'>53 kilometres away</h1>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default First;
