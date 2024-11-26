import React, { useEffect, useState } from 'react';
import useOnClickOutside from './useOnClickOutside .jsx'; // Import the custom hook
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../store/auth.jsx";
import url from "../assets/proImg" 
 
 function DialogDefault({name,email}) {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
   
  const toggleDialog = () => setIsOpen(!isOpen);

  const ref = useOnClickOutside(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  });



  const { user, credit,logout } = useAuth()

  const [token,setToken] = useState(user)


  
  return (
<>
    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 max-sm:hidden mr-3">
      <img
        src={user?.userData?.profile ? user?.userData?.profile : url} // Replace with your image URL
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
        src={user?.userData?.profile ? user?.userData?.profile : url} // Replace with your image URL
        alt="Example"
        className="w-full h-full object-cover"
      />
    </div>
        <h2 className="text-xl font-semibold mb-1">{user?.userData?.firstName}</h2>
        <p className="mb-4">
           <span className='font-semibold'>Subcription: </span>
{user?.userData?.subscription == "3" ? "Bussiness Version" : user?.userData?.subscription == null ? "No subscription purchased": user?.userData?.subscription}
           <br />
           <span className='font-semibold'>Credits: </span>
            <span className='ml-9'>{credit}</span>
        </p>
      
      <div className='flex'>
        {
          user?.userData?.subscription &&  <button className='mx-3 ac-bg px-5 py-2 rounded-full font-semibold hover:bg-[#284e1f] transition-all text-white' onClick={()=>{navigate("/history")}}>History</button>
        }
        <button className='mx-3 ac-bg px-10 py-1 rounded-full font-semibold hover:bg-[#284e1f] transition-all text-white' onClick={()=>{
          navigate("/profile-info")
        }}>See more</button>
        <button className='mx-3 ac-bg px-5 py-4 font-semibold hover:bg-[#284e1f] rounded-full transition-all text-white' onClick={()=>{
        logout()
        window.location.href = "https://jewellerydekho.in/login"
        }}>Logout</button>
      </div>
      </div>
    </div>
  )}
</>
  );
}


export default DialogDefault;
