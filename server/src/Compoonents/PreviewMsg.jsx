import React, { useEffect, useState } from 'react'
import api from './Api'

const PreviewMsg = () => {
    
  const [userdata,setUserdata] = useState()


  useEffect(()=>{
    api.get("/contact").then((res)=>{
        console.log(res.data.contacts)
        setUserdata(res.data.contacts)
      })
  },[])

  userdata?.map((el,index)=>{
    if(el?.contact?.name )
        console.log(el?.contact)
  })


  return (
    <>
    <div className='max-md:pt-[120px]'></div>
    <h1 className='text-center luxuria font-bold text-3xl my-10'><i>Preview Messages</i></h1>
    <div className='grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-10'>
        {
            userdata?.map((el,index)=>{
return( <div key={index} className=' h-[400px] rounded-md mx-5 mb-10 flex flex-col bg-light shadow-xl'>
            <div className='px-5 my-5 flex gap-3 relative text-wrap'>
                {el?.names}
                <br />
                {el?.email}
                <br />
                {el?.subject}
            </div>

            <div className='px-5 luxuria font-medium italic my-7'>
               {el?.message}
            </div>
        </div>)
            })
        }
        
    </div>

    </>
  )
}

export default PreviewMsg