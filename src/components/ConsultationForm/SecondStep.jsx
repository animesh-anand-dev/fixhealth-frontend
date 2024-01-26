import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setsecondStep, setStep } from '../../store/slices';
import { useLocation } from "react-router-dom";

const SecondStep = () => {

  const dispatch = useDispatch();
  const {step} = useSelector((state) => state.root);
  const ageOfUser = useSelector((state) => state.root.secondStep.age);
  const cityOfUser = useSelector((state) => state.root.secondStep.city);
  const companyOfUser = useSelector((state) => state.root.secondStep.company);

  //const [cityData, setCityData] = useState([""]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterValue = queryParams.get("city");

  const myCity=["Ranchi","Patna","Delhi","Mumbai","Bangalore","Indore","Chennai"]
  
  // form values initial state
  const [formData, setFormData] = useState({
    age: ageOfUser || "",
    city: cityOfUser || "",
    company: companyOfUser || ""
  })

  // form values onchange
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
        ...formData, 
        [name]: value
    })
  }

  const [isSubmitted, setIsSubmitted] = useState(false) // state for sent status
  // onsubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop form submission
    setIsSubmitted(true) // update submit status
  }

  // const fetchCity = async () => {
  //   const cityApi = "http://localhost:3001/getDetails";
  //   const response = await fetch(cityApi);
  //   const data = await response.json();
  //   setCityData(data);
  // }

  useEffect(() => {
    // fetchCity();
    if(isSubmitted) { // check if any form errors
        // update Redux Slice
        dispatch(
          setStep(step+1) // update form step
        ) 
        dispatch(
          setsecondStep({ // update firstStep form
            age: formData.age,
            city: filterValue || formData.city,
            company: formData.company
          })
        );
    }
  }, [formData, isSubmitted, dispatch, step, filterValue])

  return (
    <div className='flex flex-col mt-6 '>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <label className='text-white font-normal text-base' htmlFor='name'>Name</label> */}
        <div className='flex flex-col gap-4 items-center'>
          <div>
            <input
              type='number'
              id='age'
              name='age'
              placeholder="Enter Your Age"
              value={formData.age}
              onChange={handleChange}
              required
              className='rounded-full text-center p-2 outline-none bg-richblack-700 border border-blue-900 focus:border-newColor-1 hover:border-newColor-1 text-white'
            />
          </div>
          <div>
            <select required onChange={handleChange} name='city' id='city' className='rounded-full text-center p-2 outline-none cursor-pointer bg-richblack-700 border border-blue-900 focus:border-newColor-1 hover:border-newColor-1 text-white'>
              <option>{filterValue? filterValue: <span>Select City</span>}</option>
              { 
                myCity.map( (data,index) => 
                <option key={index} value={filterValue || data}>
                  {data}
                </option> )
              }
            </select>
          </div>
          <div>
            <input
              type='text'
              id='company'
              name='company'
              placeholder="Enter Your Company"
              value={formData.company}
              onChange={handleChange}
              required
              className='rounded-full text-center p-2 outline-none bg-richblack-700 border border-blue-900 focus:border-newColor-1 hover:border-newColor-1 text-white'
            />
          </div> 
          <div className='flex flex-row justify-between gap-16 text-white my-auto'>
                    {
                        step!==1 ? (<button onClick={()=>dispatch(setStep(step-1))} className='border hover:scale-110 hover:delay-400 hover:bg-richblue-900 border-newColor-1 px-4 rounded-md p-2'>Previous</button>) : (<div className='hidden'></div>)
                    }

                    <button type='submit' className='border hover:scale-110 hover:delay-400 hover:bg-richblue-900 border-newColor-1 px-4 rounded-md p-2'>Next</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SecondStep