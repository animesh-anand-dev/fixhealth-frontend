import React from 'react'

const RadioCard = (props) => {
    const {data}=props
  return (
    <div >
          <input className="hidden" id={data.id} type="radio" value={data.name} name="doctor"/>
          <label className="text-white flex flex-col p-4 border-2 border-gray-400  cursor-pointer" htmlFor={data.id}>
              <span className="text-lg font-semibold uppercase">Dr. {data.name}</span>
              <span className="text-md font-semibold">{data.speciality}</span>
              <span className="text-md font-medium mt-2">{data.city}</span>
            </label>
          </div>
  )
}

export default RadioCard