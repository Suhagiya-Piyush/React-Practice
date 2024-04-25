import React from 'react'

export const Card = ({ id, name, age, email }) => {
  return (
    <div>
        <div className="min-w-[100%] flex justify-center mt-28">
          <div className="w-[20rem] shadow-2xl rounded-3xl bg-yellow-100">
            <div className="py-6">
                <h1 className="text-4xl bg-white mb-2 w-[30%] mx-auto rounded-2xl text-gray-500">{id+1}</h1>
              <h2 className="uppercase text-2xl font-semibold">Name : {name}</h2>
              <p className="mt-2">
                <span className="font-semibold">Age : {age}</span>
              </p>
              <p className="mt-2">Email : {email}</p>
            </div>
          </div>
        </div>
    </div>
  )
}
