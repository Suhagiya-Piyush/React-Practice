import React from 'react';

export const CardDemo = () => {
  return (
    <div className='my-3'>
        <div className='w-[20rem] shadow-2xl rounded-3xl'>
            <div className='bg-sky-500 rounded-3xl py-8'>
                <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Image" className='rounded-full h-36 mx-auto'/>
            </div>
            <div className='py-6'>
                <h2 className='uppercase text-2xl font-semibold'>sahil dudhat</h2>
                <p className='mt-2'><span className='font-semibold'>Full-Stack</span></p>
                <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aut fugiat odio?</p>
                <button className='rounded-xl bg-sky-500 px-4 py-2 text-white mt-4'>Read More</button>
            </div>
        </div>
    </div>
  )
}
