/* eslint-disable */
import React from 'react';

function Main() {
    return (
        // <div className='flex justify-center items-center bg-black text-white'>
        //     <h1 className=' text-bold z-10 text-center text-5xl	'>Not sure where to go?</h1>
        // <img className='absolute mt-20 w-5/6 z-0' src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=1200" alt="img" />


        // </div>
        <div className='bg-black flex justify-center items-center'>
            <div className=' z-30 mt-96 absolute h-56 flex justify-center items-center '>
                <div className='flex-col space-y-12'>
                    <div className='flex justify-center items-center flex-col text-white'>
                        <h1 className='text-5xl font-bold md:text-5xl '>Not sure where to go? Perfect.</h1>
                    </div>
                  
                    <div className='flex justify-center items-center'>
                        <button className='bg-white p-4 text-xl text-purple-800 font-bold rounded-full'>I'm flexible!</button>
                    </div>
                </div>
            </div>
            <img
                className='rounded-lg w-5/6 m-20'
                src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=1200" alt="bg"
            />
        </div>


    );
}

export default Main;
