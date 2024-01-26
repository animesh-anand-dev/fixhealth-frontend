import React from 'react'
import TestimonialCard from './TestimonialCard'
import { useRef, useEffect, useState } from "react";
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from 'react-icons/md';
import { testimonials } from '../data/testimonials';

function TestimonialSection() {

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const [data, setData] = useState([]);


  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  function retrieveProducts() {
    setData(testimonials);
  }

  useEffect(() => retrieveProducts(), [])

  return (
    <div className='relative flex flex-col w-11/12 mx-auto no-scrollbar'>
        <div className='text-white text-lg md:text-3xl font-semibold text-center p-10'>Recovery Stories by Patients</div>
        <div>
            <div ref={scrl} onScroll={scrollCheck} className=" pt-4 pb-4 m-4 overflow-x-auto scroll-smooth box-border no-scrollbar"> 
                <div className='inline-flex gap-4'>
                    {data.map((d, i) => (
                    <TestimonialCard key={i} data={d} />
                    ))}
                </div>
            </div>
            <div>
                {scrollX !== 0 && (
                    <button className="absolute top-28 bottom-0 left-0 xl:-left-2s" onClick={() => slide(-500)}>
                    <div className="w-8 h-8 p-2 rounded-full shadow-md  flex items-center justify-center border border-newColor-1 text-newColor-1 bg-richblack-800">
                    <MdOutlineArrowBackIos/>
                    </div>
                    </button>
                )}
                
                {!scrolEnd && (
                <button className="absolute top-28 bottom-0 right-0 xl:-right-2 " onClick={() => slide(+500)}>
                    <div className="w-8 h-8 rounded-full shadow-md flex items-center justify-center border border-newColor-1 text-newColor-1 bg-richblack-800">
                        <MdOutlineArrowForwardIos/>
                    </div>
                </button>
                )}
            </div>
        </div>  
    </div>
  )
}

export default TestimonialSection