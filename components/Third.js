import Image from 'next/image';
import React from 'react';

function Third() {
    return (
        <div className='mx-20 my-20 space-y-12'>
            <div className=''>
                <div className='grid place-items-start ml-20 z-20 absolute mt-16 h-[500px] w-[550px]'>
                    <h1 className='text-white tracking-tight font-bold text-8xl text-left mb-20'>Questions about hosting?</h1>
                    <button className=' text-lg p-3 font-semibold bg-white text-gray-800 rounded-lg text-left hover:bg-gray-200'>Ask a Superhost</button>
                </div>
                <div className='relative min-h-[667px] min-w-[667px]'>

                    <Image
                        className='rounded-lg'
                        src="https://a0.muscache.com/im/pictures/cca24f3f-8f66-4e9d-98d8-dd5cda8911eb.jpg?im_w=1200"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>


            </div>

        </div>

    );
}

export default Third;
