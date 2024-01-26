import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setthirdStep, setStep } from '../../store/slices';

const ThirdStep = () => {
  
  const dispatch = useDispatch();
  const {step} = useSelector((state) => state.root);
  const complaintsOfUser = useSelector((state) => state.root.thirdStep.complaintsOfUser)
  const ageOfUser = useSelector((state) => state.root.secondStep.age);

  // form values initial state
  const [formData, setFormData] = useState({
    chiefComplaints : complaintsOfUser || ""
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

  useEffect(() => {
    if(isSubmitted) { // check if any form errors
        // update Redux Slice
        
        if(ageOfUser<40){
          dispatch(
            setStep(step+2) // update form step
          )
        } else {
          dispatch(
            setStep(step+1) // update form step
          )
        }
        dispatch(
          setthirdStep({ // update firstStep form
            chiefComplaints : formData.complaints,
          })
        );
    }
  }, [formData, isSubmitted, dispatch, ageOfUser, step])

  return (
    <div className='flex flex-col mt-6 '>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <label className='text-white font-normal text-base' htmlFor='name'>Name</label> */}
        <div className='flex flex-col gap-4 items-center'>
          <div>
            <textarea
              id='complaints'
              name='complaints'
              placeholder="Enter Your Chief Complaints"
              value={formData.complaints}
              onChange={handleChange}
              required
              cols={70}
              rows={7}
              className='rounded-md text-center p-2 outline-none bg-richblack-700 border border-blue-900 focus:border-newColor-1 hover:border-newColor-1 text-white'
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

export default ThirdStep