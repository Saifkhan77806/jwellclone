import React, { useLayoutEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../components/ui/sheet"
import { Button } from "../components/ui/button"
import { Link, useNavigate } from 'react-router-dom';

import { FiMenu } from "react-icons/fi";
import Logo from './Logo';
import api from './Api';
const Sheets = () => {
    const [open,setOpen] = useState(true)
    const navigate = useNavigate()
    const [token, setToken] = useState()

    useLayoutEffect(()=>{
        api.post("/adverify", {token: localStorage.getItem("token")}).then((res)=>{
          console.log(res.data)
          setToken(res.data)

        }).catch((err)=>{
          console.log(err)
        })
    
      },[])
    

    return (
        <>
            <Sheet>
                <SheetTrigger className='hidden max-md:block'><FiMenu /></SheetTrigger>
                <SheetContent className="">
                    <SheetHeader>
                        <SheetTitle className=' flex items-center justify-center  max-md:ml-[-50px] max-sm:ml-[-53px] mb-5'>
                       <Logo />
                        </SheetTitle>
                        <h1 className='font-bold poppins py-2 text-center  hover:bg-gray-200'>
                            <Link to="/">
                            Home
                            </Link>
                        </h1>
                     <h1 className='font-bold poppins py-2 text-center hover:bg-gray-200'>
                     <Link to="/aprov">
                            Approve review
                    </Link>
                     </h1>
                     <h1 className='font-bold poppins py-2 text-center hover:bg-gray-200'>
                     <Link to="/post-blog">
                            Post Blog
                    </Link>
                     </h1>
                     <h1 className='font-bold poppins py-2 text-center  hover:bg-gray-200'>
                     <Link to="/history">
                        History
                            </Link>
                     </h1>
                     
                     


                    </SheetHeader>
                    {
                        !token ? 
                        <Button className="absolute bottom-4 hover:bg-[#284e1f] transition-all ac-bg" onClick={()=>{navigate("/login")}}>Login</Button> : <Button className="absolute bottom-4 hover:bg-[#284e1f] transition-all ac-bg" onClick={()=>{
                            localStorage.removeItem("token")
                            window.location.href = "https://adminaccess.jewellerydekho.in/"
                            }}>Logout</Button>
                    }
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Sheets
