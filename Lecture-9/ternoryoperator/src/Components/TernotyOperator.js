import React from 'react'

const TernaryOperator = (props) => {
  let text = "";
  let clr;
  if(props.a === props.b && props.b === props.c){
    text = "Your Emojis are Same!";
    clr = {color:"green",border:"2px solid green"};
  }else{
    text = "Your Emojis aren't Same!";
    clr = {color:"red",border:"2px solid red"};
  }
  (props.a === props.b && props.b === props.c) ? text = "Your Emojis are Same!" : text = "Your Emojis arn't Same!";
  return (
    <div className='min-h-[90vh] bg-orange-200'>
        <div className='pt-16 pb-4'>
          <span className='text-6xl mx-5 bg-white p-4 rounded-3xl'>{props.a}</span>
          <span className='text-6xl mx-5 bg-white p-4 rounded-3xl'>{props.b}</span>
          <span className='text-6xl mx-5 bg-white p-4 rounded-3xl'>{props.c}</span>
        </div>
        <div className='mt-10 text-8xl border-2 border-black py-5 mx-5 rounded-3xl bg-cyan-200 hover:bg-blue-200 cursor-pointer' style={clr}>{text}</div>
    </div>
  )
}
export default TernaryOperator;
