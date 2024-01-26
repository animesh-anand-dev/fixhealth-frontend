import React from 'react'
import { useSelector } from 'react-redux'

const SixthStep = () => {
  
  // Get Redux Form State and output to JSON format
  const state = useSelector(state => state)
  const stateOutput = (`JSON Data Form-Completed: ${JSON.stringify(state, null, 2)}`)
  console.log(stateOutput) // output to console.log

  return (
    <div className='flex flex-col text-center items-center justify-center'>
      <div className='text-white font-semibold text-3xl mb-2 tracking-wide'>
        Success
      </div>
      <div class="svg-container">    
        <svg class="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
            <circle class="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
            <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/>
        </svg>
      </div>
      <div className='text-white font-medium text-lg mt-2 tracking-wide'>
        Your booking has been confirmed
      </div>
    </div>
  )
}

export default SixthStep