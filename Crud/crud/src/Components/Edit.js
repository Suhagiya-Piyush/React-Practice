import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const Navigate = useNavigate();
  const {id} = useParams();
  const [student, setStudent] = useState({
    FirstName: "",
    LastName: "",
    Title: "",
    Age: "",
    City: ""
  });

  const editStudent = async(e) => {
    e.preventDefault();
   await axios.put(`http://localhost:3001/student/${id}`, student);
    Navigate("/home");
  }

  const loadUser = async() => {
    const refrance = await axios.get(`http://localhost:3001/student/${id}`);
    setStudent(refrance.data)
  }
  console.log(student, "asasas");
  useEffect(() => {
    loadUser();
  },[])
  
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Edit Student Details
          </h2>
          <form
            action="#"
            method="POST"
            className="mt-8"
            onSubmit={editStudent}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Student Name{" "}
                </label>
                <div className="flex">
                  <div className="mt-2 mx-1">
                    <input
                      value={student.FirstName}
                      onChange={(e) =>
                        setStudent({ ...student, FirstName:e.target.value })
                      }
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="First Name"
                      id="name"
                    ></input>
                  </div>
                  <div className="mt-2 mx-1">
                    <input
                      value={student.LastName}
                      onChange={(e) =>
                        setStudent({ ...student, LastName:e.target.value })
                      }
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Last Name"
                      id="name"
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="department"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Department{" "}
                </label>
                <div className="mt-2">
                  <select
                    value={student.Title}
                    onChange={(e) =>
                      setStudent({ ...student, Title:e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="department"
                    id="department"
                  >
                    <option defaultValue>Select Course</option>
                    <option value="Full-Stack Developer">
                      Full-Stack Developer
                    </option>
                    <option value="Front-end Developer">
                      Front-end Developer
                    </option>
                    <option value="Back-end Developer">
                      Back-end Developer
                    </option>
                    <option value="Android Developer">Android Developer</option>
                    <option value="IOS Developer">IOS Developer</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="SoftWare Developer">
                      SoftWare Developer
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Age{" "}
                </label>
                <div className="mt-2">
                  <input
                    value={student.Age}
                    onChange={(e) =>
                      setStudent({ ...student, Age:e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    defaultValue={17}
                    placeholder="Age"
                    id="age"
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  City{" "}
                </label>
                <div className="mt-2">
                  <input
                    value={student.City}
                    onChange={(e) =>
                      setStudent({ ...student, City:e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="City"
                    id="city"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Edit Student <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

