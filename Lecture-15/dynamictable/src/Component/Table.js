import React, {useEffect, useState} from 'react';
import Data from './Data';


export const Table = () => {
  const [Val, setVal] = useState(Data);
    console.log(Data, setVal);

    return(
        <div className='h-[100vh]'>
                <h2 className='text-3xl font-semibold my-4'>Layout Table</h2>
                <table className='table-auto w-[90%] mt-6 rounded-2xl overflow-hidden mx-auto cursor-pointer'>
                    <thead className='bg-orange-300 border uppercase text-xl font-semibold'>
                        <tr className=''>
                            <td className='duration-1000'>Id</td>
                            <td className='duration-1000'>Name</td>
                            <td className='duration-1000'>Email</td>
                            <td className='duration-1000'>City</td>
                            <td className='duration-1000'>Phone</td>
                        </tr>
                    </thead>
                    <tbody className='border font-semibold text-green-600'>
                        {Val.map((cValue, ind) => {
                            return (<>
                            <tr className='duration-700'>
                            <td>{cValue.id}</td>
                            <td>{cValue.name}</td>
                            <td>{cValue.email}</td>
                            <td>{cValue.city}</td>
                            <td>{cValue.phone}</td>
                        </tr>
                            </>)
                        })}
                    </tbody>
                </table>
            </div>
    )}

export default Table;
