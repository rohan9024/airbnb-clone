import Image from 'next/image';
import React from 'react';

function Second() {
    return (
        <div className='mx-20 space-y-12'>
            <div className='text-gray-800'>
                <h1 className='text-4xl font-semibold mt-20'>Discover Airbnb Experiences</h1>
            </div>
            <div className='flex space-x-12'>
                <div className=''>
                    <div className=' mx-12 mb-44 h-[300px] w-[390px] space-y-12 flex flex-col items-center justify-center absolute z-20 text-white'>
                        <h1 className='tracking-tight text-6xl font-semibold mt-24 ml-5 flex-wrap'>Things to do your trip</h1>
                        <button className='text-lg p-3 px-6 font-semibold bg-white text-gray-800 rounded-lg mr-48 hover:bg-gray-200'>Experiences</button>
                    </div>
                    <div className='relative min-h-[667px] min-w-[667px]'>
                        <Image
                            className="rounded-lg"
                            src="https://a0.muscache.com/im/pictures/0947f1e4-a6a9-4514-8b78-9e47ea797631.jpg?im_q=highq&im_w=720"
                            objectFit="cover"
                            layout="fill"

                        />
                    </div>

                </div>
                <div className=''>
                    <div className=' mx-12 mb-44 h-[300px] w-[390px] space-y-12 flex flex-col items-center justify-center absolute z-20 text-white'>
                        <h1 className='tracking-tight text-6xl font-semibold mt-24 ml-5 flex-wrap'>Things to do from home</h1>
                        <button className='text-lg p-3 px-6 font-semibold bg-white text-gray-800 rounded-lg mr-32 hover:bg-gray-200'>Online Experiences</button>
                    </div>
                    <div className='relative min-h-[667px] min-w-[667px]'>
                        <Image
                            className='rounded-lg'
                            src="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=720"
                            objectFit="cover"
                            layout="fill"
                        />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Second;
