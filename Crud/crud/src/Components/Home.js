import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Pagination } from './Pagination';


export function Home() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postparPage, setpostparPage] = useState(2);

  const loadUser = async () => {
    const refrance = await axios.get("http://localhost:3001/student");
    setData(refrance.data)
  }

  useEffect(() => {
    loadUser();
  }, [])

  const lastIndex = currentPage * postparPage;// par page 1 * 2 = 2
  const firstIndex = lastIndex - postparPage; // 2 - 2 = 0
  const currentPost = data.slice(firstIndex, lastIndex);

  const onDelete = (id) => {
    axios.delete(`http://localhost:3001/student/${id}`)
      .then((responce) => { loadUser(); })
      .catch((error) => { alert("Item Not Deleted!!") })
  }

  const searchData = data.filter(user => user.FirstName.toLowerCase().includes(searchItem) || user.LastName.toLowerCase().includes(searchItem)) 

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-10 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Students</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Students. You can add new Students, edit or delete existing
              ones.
            </p>
          </div>
          <div className="flex grow justify-end">
            <input onChange={(e) => setSearchItem(e.target.value)}
              className="flex h-10 w-[250px] rounded-md bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mx-4"
              type="text"
              placeholder="Serach"
            ></input>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to="/add">Add new Student</Link>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Full Name
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Department
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        City
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {(searchItem === "" ? currentPost : searchData).map((student) => (
                      <tr key={student.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 text-start">{student.FirstName} {student.LastName}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-start">
                          <div className="text-sm text-gray-900 ">{student.Title}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-start">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {student.Age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 text-start">
                          {student.City}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <Link to={`/edit/${student.id}`}><button className="text-white border bg-green-500 py-2 px-6 rounded-lg mx-2 text-lg"> <FaUserEdit /></button></Link>

                          <Link onClick={() => onDelete(student.id)} to=""><button className="border bg-rose-500 text-white py-2 px-6 rounded-lg mx-2 text-lg"> <MdDelete /></button></Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='my-4'>
                  <Pagination totalPost={data.length} postparPage={postparPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
