import React from 'react'
import ReactStars from "react-rating-stars-component";

function TestimonialCard({data}) {

  return (
    <div className='cursor-pointer' >
      <div className='w-[16rem] h-[20rem] md:w-[20rem] md:h-[25rem] bg-newColor-1 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-newColor-1   rounded-lg flex flex-col justify-between items-center p-4 hover:shadow-xl hover:transition-all hover:delay-500'>

        <div className='text-center text-white font-semibold text-base md:text-xl'>{data.reviewHeading}</div>
        <div className='m-auto text-center text-richblack-25 font-normal font-base'>{data.reviewDescription}</div>
        <div className='text-center'>
          <ReactStars
            value={data.rating}
            count={5}
            size={24}
            isHalf={true}
            edit={false}
            activeColor="#ffd700"
          />,
        </div>

        <div className='flex flex-row gap-5'>
          <div>
            <img 
              className=' rounded-full w-[5rem] h-[5rem] object-cover p-2'
              alt='p'
              src={data.profileImage}/>
          </div>
          <div className='flex flex-col text-white justify-center items-center'>
            <div className='text-richblack-50 text-sm'>{data.name}</div>
            <div className='text-richblack-50 text-sm'>{data.age} years old</div>
            <div className='text-richblack-50 text-sm'>{data.profession}</div>
          </div>
        </div>
      

    </div>
    </div>
    
  )
}

export default TestimonialCard