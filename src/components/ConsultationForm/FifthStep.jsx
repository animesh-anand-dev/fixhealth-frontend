import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setfifthStep, setStep } from '../../store/slices';
import RadioCard from './RadioCard';

const FifthStep = () => {
  const dispatch = useDispatch();
  const {step} = useSelector((state) => state.root);
  const citySelected = useSelector((state) => state.root.secondStep.city);
  const doctorSelection = useSelector((state) => state.root.fifthStep.doctor)

  const [doctorData, setDoctorData] = useState([]);

    // form values initial state
    const [formData, setFormData] = useState({
      doctor: doctorSelection || ""
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

    const fetchDoctor = async () => {
      const cityApi = "https://fixhealth-backend-tqhn.onrender.com/getDetails";
      const response = await fetch(cityApi);
      const data = await response.json();
      setDoctorData(data);
    }

    useEffect(() => {
      fetchDoctor();
      if(isSubmitted) { // check if any form errors
          // update Redux Slice
          dispatch(
            setStep(step+1) // update form step
          )
          dispatch(
            setfifthStep({ // update firstStep form
              doctor: formData.doctor,
            })
          );
      }
    }, [formData, isSubmitted, dispatch, step])
    let filteredCity = doctorData.filter((doctors)=>doctors.city===citySelected);

  return (
    
    <div className='flex flex-col mt-3 '>

    {
    filteredCity.length>0 ?
    (
      <form className="flex flex-col gap-4 w-full max-w-screen-sm flex-wrap" onSubmit={(e) => handleSubmit(e)}>
                <div className='text-white text-center text-lg font-semibold mb-4'>Select your Doctor</div>

        <div className='flex flex-row gap-2 justify-between items-center'>

        {
           filteredCity.map((data) => 
          <RadioCard data={data}/>
          )

        }
        </div>
        <div className='flex flex-row justify-between gap-16 text-white my-auto'>
                    {
                        step!==1 ? (<button onClick={()=>dispatch(setStep(step-1))} className='border hover:scale-110 hover:delay-400 hover:bg-richblue-900 border-newColor-1 px-4 rounded-md p-2'>Previous</button>) : (<div className='hidden'></div>)
                    }

                    <button type='submit' className='border hover:scale-110 hover:delay-400 hover:bg-richblue-900 border-newColor-1 px-4 rounded-md p-2'>Next</button>
        </div>
	    </form>
    )
    :
    <div className='text-white font-semibold'> No Doctors Available</div>
    }

    </div>
  )
}

export default FifthStep