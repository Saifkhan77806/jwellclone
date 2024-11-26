import React,{useState, useEffect} from 'react'
// import slide from "../img/slide.png"
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
import Logo from './Logo'



const slides = [slide1, slide2, slide3, slide4, slide5,slide6, slide7, slide8, slide9,slide10,slide11]; // Add more images as needed

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="par flex justify-center items-center flex-col relative my-7">

    <div className="text-center my-5">
      <h1 className="text-3xl font-bold relative inline-block luxuria">
        Ai creation
        <span className="absolute -bottom-1 left-12 transform -translate-x-1/2 w-3/5 h-[0.20rem] bg-yellow-400 rounded-full"></span>
      </h1>
    </div>
    <div className="relative rounded-lg shadow-2xl h-[35vw] overflow-hidden transition-all w-[35vw] max-sm:w-[45vw] max-sm:h-[45vw] max-[550px]:w-[50vw] max-[550px]:h-[50vw] max-[450px]:w-[55vw] max-[450px]:h-[55vw] max-[400px]:h-[60vw] max-[400px]:w-[60vw] max-[370px]:w-[70vw] max-[370px]:h-[70vw]">
    {/* max-md:h-[400px] max-md:w-[400px] max-sm:w-[300px] max-sm:h-[300px] max-[320px]:w-[270px] max-[320px]:h-[270px] */}
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="absolute inset-0  slideImg w-full h-full transition-all duration-500"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 transition-all">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 transition-all rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
    </div>
    </>

  );
}

export default Slideshow;