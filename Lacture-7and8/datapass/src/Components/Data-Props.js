import React from 'react'

// Props Destructor Method in Lecture 8 (This Method Study in Lecture 8)
export const DataProps = ({name, disc, img, course}) => {
  return (
    <div className='my-3'>
        <div className='w-[20rem] shadow-2xl rounded-3xl'>
            <div className='bg-sky-500 rounded-3xl py-8'>
                <img src={img} alt="Image" className='rounded-full h-36 mx-auto'/>
            </div>
            <div className='py-6'>
                <h2 className='uppercase text-2xl font-semibold'>{name}</h2>
                <p className='mt-2'><span className='font-semibold'>{course}</span></p>
                <p className='mt-2'>{disc}</p>
                <button className='rounded-xl bg-sky-500 px-4 py-2 text-white mt-4'>Read More</button>
            </div>
        </div>
    </div>
  )
}
