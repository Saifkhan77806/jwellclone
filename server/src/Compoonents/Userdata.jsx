import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import api from './Api'
import { useAuth } from '../../store/auth'
import url from "../assets/proImg" 
import { Button, Input, Textarea, Typography } from '@material-tailwind/react'

const Userdata = () => {
    const {email} = useParams()
    const [userdata,setUserdata] = useState()
    const [success, setSuccess] = useState()
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: email,
        credits: 0
      })

    const {user} = useAuth()
    if(user?.userData?.provider != "admin"){
      navigate("/")
    }

    const sendCredit = () =>{
        if(data?.credits<0){
            alert("Credis is not to be less than zero")
        }

        console.log(userdata?.credits + data.credits)
      const updateCredits =   Number(userdata?.credits) + Number(data.credits)
        console.log(updateCredits)
      setData({...data,credits: updateCredits})
        api.post("/addcredits", {email, credits: updateCredits}).then((res)=>{
            console.log("add credits",res.data)
        }).catch((err)=>{
            console.log(err)
        })

        console.log(data)
      }

    const change = (e) =>{
        setData({...data, credits: e.target.value})
    }
    

    const fetch = async() =>{
        await api.get(`/byemail/${email}`).then((res)=>{
          console.log(res.data.user)
          setUserdata(res.data?.user)
        })
      }

      useEffect(()=>{
        fetch()
      },[success])
    
  return (
   <>
   <div className='pt-[170px]'></div>
   <div className=' bg-light py-3 flex flex-col items-center w-[80%] mx-auto rounded-xl shadow-2xl'>
   <div className='w-[80px] h-[80px] rounded-full bg-red-600 overflow-hidden'>
    <img src={userdata?.profile !== "image not found" ? userdata?.profile : url} className='h-full w-full' />
   </div>
   <div className='flex flex-col'>
    <h1 className='text-xl font-bold poppins pt-4 pb-3 text-center'>{userdata?.name}</h1>
    <p className='font-semibold poppins py-2 left-0'><span className='text-gray-600'>Email: </span>{userdata?.email}</p>
    <p className='font-semibold poppins py-2 left-0'><span className='text-gray-600'>Phone: </span> {userdata?.phone}</p>
    <p className='font-semibold poppins py-2 left-0'><span className='text-gray-600'>Country: </span> {userdata?.country}</p>
    <p className='font-semibold poppins py-2'><span className='text-gray-600'>Subscription: </span>  {userdata?.subscription}</p>
    <p className='font-semibold poppins left-0 py-2'><span className='text-gray-600'>Credits: </span>  {userdata?.credits}</p>
   </div>


   </div>
   <form action="" className='flex flex-col px-5 my-20'>
   <Typography variant="h6" color="blue-gray" className="mb-2">
              Send no. of token
            </Typography>
            <Input
              size="lg"
              type='number'
              min={0}
              placeholder="0"
              value={data.credits}
              className=" bg-light border-none shadow-lg"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e)=>change(e)}

            />
        <Button onClick={(e)=>sendCredit()} className="my-5 flex justify-center items-center px-10 ac-bg w-1/5 mx-auto hover:bg-[#5a7a45] ">Post</Button>
        </form>
   </>
  )
}

export default Userdata