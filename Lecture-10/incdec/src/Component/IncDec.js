import React, { useState } from 'react';

export const IncDec = () => {
    const [count, setCount] = useState(0);
    let clr;
    (count % 10 === 0) ? clr = {color : "red"} : clr = {color : "green"};

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }
    const Reset = () => {
        setCount(0);
    }

  return (
    <div className='mt-10 bg-slate-400 py-16'>
        <h1 className='font-bold text-6xl max-w-[40%] border mx-auto py-2 rounded-2xl bg-white' style={clr}>{count}</h1>
        <div className=' mt-14'>
            <button className='px-10 py-2 border rounded-2xl bg-sky-500 text-white font-semibold mx-4 hover:bg-sky-300 transition' onClick={Increment}>Increment</button>
            <button className='px-10 py-2 border rounded-2xl bg-sky-500 text-white font-semibold mx-4 hover:bg-sky-300 transition' onClick={Decrement}>Decrement</button>
            <button className='px-10 py-2 border rounded-2xl bg-red-500 text-white font-semibold mx-4 hover:bg-rose-300 transition' onClick={Reset}>Reset</button>
        </div>
    </div>
  )
}
