import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
    let review=props.review;
  return (
    <div className=' flex flex-col md:relative  ' >

        <div className=' absolute top-[-7rem] z-[10] mx-auto '  >
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-40 ' src={review.image} alt="" />
            <div className=' w-[140px] h-[140px] bg-violet-500 rounded-full absolute  top-[-6px] z-[-1]  left-[10px]  '></div>
        </div>

        <div className='mt-7' >
            <p className=' tracking-wide text-2xl font-bold text-center capitalize ' >{review.name}</p>
            <p className='text-violet-500 uppercase text-sm'  >{review.job}</p>
        </div>

        

        <div className='text-violet-500 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='  text-center mt-4 text-slate-500  ' >{review.text}</div>

        <div className='flex justify-center text-violet-500 mt-5'>
            <FaQuoteRight/>
        </div>

       
      
    </div>
  )
}

export default Card
