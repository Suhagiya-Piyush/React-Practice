import Krishna from './Assets/Krishna.jpg';
import React from 'react'

const Render = () => {
  return (<>
    <div className='bg-yellow-300 py-6'>
        <img src={Krishna} alt="Image of Lord Krishna" className='w-[60vw] h-[70vh] mx-auto shadow-2xl shadow-black rounded-2xl'/>
        <div className='mt-10 bg-slate-300 w-[30vw] mx-auto rounded-full'>
            <h2 className='text-3xl font-bold'>Fruits List</h2>
            <ol className='text-lg list-decimal font-semibold text-orange-900'>
                <li><span className='underline'>Apple</span></li>
                <li><span className='underline'>Orange</span></li>
                <li><span className='underline'>Kiwi</span></li>
                <li><span className='underline'>Mango</span></li>
                <li><span className='underline'>Banana</span></li>
            </ol>
        </div>
    </div>
    </>
  )
}

export default Render;