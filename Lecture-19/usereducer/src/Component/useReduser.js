import React, {useReducer} from 'react';

let InitArg = 0;

const reducer = (state, action) => {
    if(action.type === "increment"){
        return state + 1;
    }
    if(action.type === "decrement"){
        return state - 1;
    }
    return state;
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, InitArg);
  return (
    <div className='py-20 bg-slate-400'>
        <h1 className='font-semibold text-6xl max-w-[50%] mx-auto border rounded-3xl py-2 bg-white'>{state}</h1>
        <div className='mt-8'>
            <button onClick={() => dispatch({type:"increment"})} className='px-8 py-2 mx-8 border rounded-2xl bg-green-500 text-white hover:bg-green-700 transition'>Increment</button>
            <button onClick={() => dispatch({type:"decrement"})} className='px-8 py-2 mx-8 border rounded-2xl bg-red-500 text-white hover:bg-red-700 transition'>Decrement</button>
        </div>
    </div>
  )
}

export default UseReducer;
