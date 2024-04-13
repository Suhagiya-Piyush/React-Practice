import React from 'react'

export const PropsDemo = (props) => {
  return (
    <div className='my-3'>
        <div className='w-[20rem] shadow-2xl rounded-3xl'>
            <div className='bg-sky-500 rounded-3xl py-8'>
                <img src={props.img} alt="Image" className='rounded-full h-36 mx-auto'/>
            </div>
            <div className='py-6'>
                <h2 className='uppercase text-2xl font-semibold'>{props.name}</h2>
                <p className='mt-2'><span className='font-semibold'>{props.cours}</span></p>
                <p className='mt-2'>{props.disc}</p>
                <button className='rounded-xl bg-sky-500 px-4 py-2 text-white mt-4'>Read More</button>
            </div>
        </div>
    </div>
  )
}
