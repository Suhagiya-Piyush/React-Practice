import React, { Component } from 'react'

export default class IncDecClass extends Component {

    constructor(){
        super()
        this.state = {count : 0}
    }
    Inc = () => {
        this.setState({count : this.state.count + 1});
    }
    Dec = () => {
        this.setState({count : this.state.count - 1});
    }
    Reset = () => {
        this.setState({count : 0});
    }

  render() {
    return (
      <div className='mt-10 bg-slate-300 py-20'>
        <h1 className=' max-w-[40%] text-5xl font-bold mx-auto border rounded-3xl bg-white py-2 cursor-pointer'>{this.state.count}</h1>
        <div className='mt-10'>
            <button className='px-8 py-2 text-2xl border font-semibold rounded-2xl bg-green-400 hover:bg-green-600 hover:text-white transition mx-8' onClick={this.Inc}>Increment</button>
            <button className='px-8 py-2 text-2xl border font-semibold rounded-2xl bg-green-400 hover:bg-green-600 hover:text-white transition mx-8' onClick={this.Dec}>Decrement</button>
            <button className='px-8 py-2 text-2xl border font-semibold rounded-2xl bg-red-400 hover:bg-red-600 hover:text-white transition mx-8' onClick={this.Reset}>Reset</button>
        </div>
      </div>
    )
  }
}
