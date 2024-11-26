import React from 'react'

const Trynow = () => {
  return (
   <>
   <h1 className='luxuria font-bold text-3xl text-center my-5'>Struggling with conceptualizing</h1>
    <p className='text-center luxuria font-bold text-lg'>Jewellery collection</p>
   <div className='flex items-center justify-center relative w-[200px] h-[200px] mx-auto'>
   <div className='w-[200px] h-[200px] rounded-lg overflow-hidden'>
   <iframe src="https://giphy.com/embed/nfAMS5TUUgw9i" width="480" height="355" className="giphy-embed w-full h-full rounded-lg" allowFullScreen></iframe>
   </div>
   <span className='absolute left-[-20%] text-white bottom-[-10px] p-4 ac-bg shadow-2xl rounded-full font-bold luxuria cursor-pointer hover:bg-[#284e1f] transition-all'><i>How its works</i></span>
   <span className='absolute right-[-20%] text-white bottom-[-10px] px-6 py-4 luxuria ac-bg shadow-2xl rounded-full font-bold cursor-pointer hover:bg-[#284e1f] transition-all'><i>Try now</i> </span>
   </div>
   </>
  )
}

export default Trynow
