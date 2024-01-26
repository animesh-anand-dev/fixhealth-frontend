import React from 'react'
import heroImage from '../assets/hero-slide1.png';
import Typewriter from 'typewriter-effect';


const HeroSection = () => {


  return (
    <div className='bg-richblue-900 max-h-max  flex flex-col-reverse md:flex-row  justify-between'>

      <div className='w-11/12 animate__animated animate__fadeInLeft animate__slow flex flex-col mx-auto items-center justify-center'>
        <div className='lg:mx-auto my-10 md:w-[100%] w-[40%] flex justify-center items-center'>
        </div>
            <div className='text-richblack-5 text-lg md:text-5xl lg:text-5xl font-bold'>
                <Typewriter
                    options={{
                        strings: ['Book an Appointment for Free', 'Get your Free Consultation'],
                        autoStart: true,
                        loop: true,
                    }}/>
            </div>
            <div className='text-richblack-25 text-sm md:text-3xl lg:text-3xl py-3'>
                60+ Expert Physiotherapists for 200+ Conditions
            </div>
            <div className='flex flex-row gap-5'>
                <button className='hover:bg-newColor-1 hover:scale-110 hover:delay-400 border border-newColor-1 py-1 px-3 md:my-3 md:py-2 md:px-5 font-semibold text-white rounded-md gap-x-2'>
                    Book Now
                </button>
                {/* <button className='my-3 py-2 px-5 font-semibold text-white rounded-md border border-newColor-1 gap-x-2'>
                    View Testimonials
                </button> */}
            </div>
        
        {/* <img className='w-[50%] object-cover' loading='lazy' src={patientRecovered} alt='Patient Recovered'/> */}
      </div>

      {/* Hero Image */}
      <div className='w-[80%] md:w-[60%] md:h-[90%] lg:block md:block items-center justify-center m-auto animate__animated animate__slideInRight animate__slow'>
        <img src={heroImage} alt='Hero'/>
      </div>

    </div>
  )
}

export default HeroSection