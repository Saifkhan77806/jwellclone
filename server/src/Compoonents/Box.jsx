import React from 'react'
import slide2 from "../img/slide2.png"

const Box = ({data}) => {
  return (
    <>
        <div className='bg-light shadow-2xl py-10 px-4 text-center h-[500px] rounded-lg'>
        <div className='w-full m-auto flex justify-center items-center flex-col'>
            <img src={slide2} className='w-36 h-36 rounded-[50%] shadow-md' alt="" />
            <h1 className='my-3 font-bold luxuria'>Title</h1>
        </div>
    <p className='h-[60%] luxuria'>
       {data}
    </p>
</div>

</>
  )
}

export default Box