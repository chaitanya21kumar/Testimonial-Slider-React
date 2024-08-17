import React from 'react'
import Card from './Card'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useState } from 'react';

const Testimonials = (props) => {
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);

    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index- 1);
        }


    }

    function rightShiftHandler(){
        if(index+1>reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+ 1); 
        }
    }
    function surpriseHandler(){
        let randomIndex=Math.floor(Math.random()*(reviews.length));
        setIndex(randomIndex);

    }
        



  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-2xl rounded-md'>
        
        <Card review={reviews[index]} ></Card>

        <div className='flex text-3xl mt-7  gap-3 text-violet-500 font-bold transition-all  justify-center ' >

            <button onClick={leftShiftHandler} className=' cursor-pointer hover:text-violet-900   '>
                <FiChevronLeft/>
            </button>

            <button onClick={rightShiftHandler} className=' cursor-pointer hover:text-violet-700  '>
                <FiChevronRight/>
            </button>

        </div>

        <div className='mt-7'>
            <button onClick={surpriseHandler} className=' bg-violet-400 hover:bg-violet-700 text-white cursor-pointer transition-all duration-200 px-10 py-2  rounded-md font-bold text-lg  '>
                Surprise Me
            </button>
        </div>
            
        
      
    </div>
  )
}

export default Testimonials
