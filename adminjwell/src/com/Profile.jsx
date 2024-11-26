import React, { useEffect, useState } from 'react';
import useOnClickOutside from './useOnClickOutside .jsx'; // Import the custom hook
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import url from "../assets/proImg" 
 
 function DialogDefault({email}) {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
   
  const toggleDialog = () => setIsOpen(!isOpen);

  const ref = useOnClickOutside(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  });




  
  return (
<>
    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 max-sm:hidden mr-3">
      <img
        src={url} // Replace with your image URL
        onClick={toggleDialog}
        alt="Example"
        className="w-full h-full object-cover"
      />
    </div>

  {isOpen && (
    <div className="fixed inset-0 flex z-30 justify-end p-4 ">
      <div
        ref={ref}
        className="bg-white rounded-lg shadow-lg w-[25rem] max-w-full  p-4 flex items-center flex-col h-[475px] justify-center relative"
      >
        <IoIosClose className='absolute top-2 text-3xl cursor-pointer right-2' onClick={toggleDialog} />
        <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
      <img
        src={url} // Replace with your image URL
        alt="Example"
        className="w-full h-full object-cover"
      />
    </div>
        <h2 className="text-xl font-semibold mb-1">{email}</h2>
      
      <div className='flex'>
        <button className='mx-3 ac-bg px-5 py-4 font-semibold hover:bg-[#284e1f] rounded-full transition-all text-white' onClick={()=>{
          localStorage.removeItem("token")
        window.location.href = "https://adminaccess.jewellerydekho.in"
        }}>Logout</button>
      </div>
      </div>
    </div>
  )}
</>
  );
}


export default DialogDefault;
