import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Credits from './Credits'
import PostBlog from './PostBlog'
import PreviewMsg from './PreviewMsg'
import ApproveReview from './ApproveReview'
import Post from './Post'

const Adhome = () => {
    const [center,setCenter] = useState("credit")
  return (
    <>
    <div className=' h-full bg-light flex'>
    <div className='w-[20%] bg-light  max-md:w-full max-md:absolute'>
        <ul className='max-md:flex max-md:justify-center'>
            <li className='hover:bg-gray-200 transition-all luxuria font-bold px-7 py-5 cursor-pointer relative max-[330px]:px-3 max-[320px]:px-1' onClick={()=> setCenter("credit")}>Send Tokens {center == "credit" && <span className='w-3 h-full bg-gradient-to-l from-green-900 to-transparent absolute bottom-0 right-0  max-md:w-full max-md:h-3 max-md:left-0 max-md:bg-gradient-to-t '></span>}</li>
            <li className='hover:bg-gray-200 transition-all luxuria font-bold px-7 py-5 cursor-pointer relative max-[330px]:px-3 max-[320px]:px-1' onClick={()=> setCenter("blog")}>Post Blog {center == "blog" && <span className='w-3 h-full bg-gradient-to-l from-green-900 to-transparent absolute bottom-0  right-0 max-md:w-full max-md:h-3 max-md:left-0 max-md:bg-gradient-to-t '></span>}</li>
            <li className='hover:bg-gray-200 transition-all luxuria font-bold px-7 py-5 cursor-pointer relative max-[330px]:px-3 max-[320px]:px-1' onClick={()=> setCenter("msg")}>Priview Message {center == "msg" && <span className='w-3 h-full bg-gradient-to-l from-green-900 to-transparent absolute bottom-0  right-0 max-md:w-full max-md:h-3 max-md:left-0 max-md:bg-gradient-to-t '></span>}</li>
            <li className='hover:bg-gray-200 transition-all luxuria font-bold px-7 py-5 cursor-pointer relative max-[330px]:px-3 max-[320px]:px-1' onClick={()=> setCenter("review")}>Approve review {center == "review" && <span className='w-3 h-full bg-gradient-to-l from-green-900 to-transparent absolute bottom-0  right-0 max-md:w-full max-md:h-3 max-md:left-0 max-md:bg-gradient-to-t '></span>}</li>
        </ul>
    </div>
    <div className='w-[80%] bg-white max-md:w-full max-sm:w-[100%]'>
       
      
    {
        center == "credit"? <div>
            <Credits />
        </div> :
        center == "blog" ?
        <div>
            <Post />
        </div> :
        center == "msg" ?
        <div>
           <PreviewMsg />
        </div> :
        <div>
            <ApproveReview />
        </div>
    }

    
    </div>
    </div>
    </>
  )
}

export default Adhome