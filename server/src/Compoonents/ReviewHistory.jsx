import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import { Link } from 'react-router-dom';

 
const Review = () => {
   const {user} = useAuth()

	
    
  return (
    <>
    <h1 className='text-center  luxuria font-bold text-3xl my-10'><i>History</i></h1>

    <div className='w-full grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 pr-5'>


   
        {user?.userData?.history.reverse().map((el, index) => {
           
          return (
         index <4 &&   <div className='m-1  rounded-xl relative overflow-hidden historyContainer' key={index}>
          <img id='testImg' className='w-full h-full rounded-xl'  src={el?.imgurl} key={el?.imgurl} alt="img" />
          <span className='w-full h-full historyContent -bottom-[100%] absolute flex justify-center rounded-bl-xl'>{el?.prompts}</span>
          </div>
          )
})}

</div>

     

<Link to="/history">
    <button className='w-[30%] py-3 my-6 rounded-md flex justify-center poppins font-semibold ac-bg mx-auto text-white hover:bg-[#284e1f] transition-all'><i>View all</i></button>
</Link>
    </>
  )
}

export default Review;





 
