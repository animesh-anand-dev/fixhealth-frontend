import React from 'react'
import { useSelector } from 'react-redux'
import {FaCheck} from "react-icons/fa"
import FirstStep from '../components/ConsultationForm/FirstStep';
import SecondStep from '../components/ConsultationForm/SecondStep';
import ThirdStep from '../components/ConsultationForm/ThirdStep';
import FourthStep from '../components/ConsultationForm/FourthStep';
import FifthStep from '../components/ConsultationForm/FifthStep';
import SixthStep from '../components/ConsultationForm/SixthStep';

const ConsultationForm = () => {

    const {step} = useSelector((state)=> state.root);

    const steps = [
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        },
        {
            id:4,
        },
        {
            id:5,
        },
       
    ]


  return (
    <div className='flex flex-row items-center justify-center my-8' >
        <div className='w-[16rem] h-[20rem] md:w-[40rem] md:h-max md:min-h-max md:max-h-max bg-newColor-1 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-newColor-1   rounded-lg flex flex-col items-center p-4 hover:shadow-xl hover:transition-all hover:delay-500'>
            
            <div className='text-white font-semibold text-xl'>
                Book an Appointment
            </div>

            <div className="relative m-2 flex w-full justify-center">
                {steps.map((item, index)=>(
                    <>
                        <div
                        className="flex flex-col items-center "
                        key={index}
                        >
                            <button
                                className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                                    step === item.id
                                    ? "border-newColor-1 bg-richblue-900 text-newColor-1"
                                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                                } ${step > item.id && "bg-newColor-1 text-newColor-1"}} `}
                            >
                                {step > item.id ? (
                                <FaCheck className="font-bold text-newColor-1" />
                                ) : (
                                item.id
                                )}
                            </button>
                        
                        </div>
                        {item.id !== steps.length && (
                        <>
                            <div
                            key={index}
                            className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                            step > item.id  ? "border-newColor-1" : "border-richblack-500"
                            } `}
                            >  
                            </div>
                        </>
                        )}
                    </>
                ))}
            </div>

            <div className=''>
                    {/* Add Form */}
                        {step === 1 && <FirstStep/> }
                        {step === 2 && <SecondStep/>}
                        {step === 3 && <ThirdStep/>}
                        {step === 4 && <FourthStep/>}
                        {step === 5 && <FifthStep/>}
                        {step === 6 && <SixthStep/>}
            </div>

        </div>
    </div>
  )
}

export default ConsultationForm