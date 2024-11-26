import React from 'react'
import slide1 from "../img/slide.png"
import slide2 from "../img/slide2.png"
import slide3 from "../img/slide3.png"
import slide4 from "../img/slide4.png"
import slide5 from "../img/slide5.png"
import slide6 from "../img/slide6.jpg"
import slide7 from "../img/slide7.jpg"
import slide8 from "../img/slide8.jpg"
import slide9 from "../img/slide9.jpg"
import slide10 from "../img/slide10.jpg"
import slide11 from "../img/slide11.jpg"



const slides = [slide1, slide2, slide3, slide4, slide5,slide6, slide7, slide8, slide9,slide10,slide11]; // Add more images as needed


const Slide = () => {
  return (
    <>
        <h1 className='luxuria text-center mt-10 mb-5 font-bold text-3xl'>AI creation</h1>
    <div className=' w-full my-5 overflow-hidden'>
        
        <div className=' w-full h-full mb-5 flex'>
            <div className='h-full flex runner'>
                {
                    slides.map((el,index)=>{
                        return (
                            <img src={el} key={index} className='h-[33.33vw] w-[33.33vw] max-md:h-[50vw] max-md:w-[50vw] mx-3 rounded-md max-sm:w-[60vw] max-sm:h-[60vw] max-[400px]:w-[80vw]' alt="" />
                        )
                    })

                }{
                    slides.map((el,index)=>{
                        return (
                            <img src={el} key={index} className='h-[33.33vw] w-[33.33vw] max-md:h-[50vw] max-md:w-[50vw] mx-3 rounded-md max-sm:w-[60vw] max-sm:h-[60vw]' alt="" />
                        )
                    })
                }
            </div>
        </div>

    </div>
    </>
  )
}

export default Slide
