import {
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import Logo from "./Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./Api";
   
  function Login() {

    const navigate = useNavigate()
    const [userEmail,setUserEmail] = useState()
    const [userPassword,setUserPassword] = useState()
    const [msg,setMsg] = useState()

    const submit = async () => {
      api.post("/adlogin", {email: userEmail, password: userPassword}).then((res)=>{
        console.log(res.data)
        if(res.data.success == false){
          setMsg(res.data)
          return
        }

      localStorage.setItem("token", res.data?.token)

       window.location.href = "https://adminaccess.jewellerydekho.in/"
      }).catch((err)=>{
        console.log(err)
      })
    };



    
    
    return (
        <>
        <div className="pt-[120px]"></div>
       <div color="transparent" className="flex items-center justify-center" >
       
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 bg-light px-10 py-10 rounded-lg shadow-2xl">
        <div className="flex justify-center items-center -ml-5">
        <Logo />
        </div>
            <Typography variant="h3" className="text-center my-5 luxuria italic">
                Login
            </Typography>
            

          <div className="mb-1 flex flex-col gap-6">
       
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              value={userEmail}
              onChange={(e)=>{setUserEmail(e.target.value)}}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white shadow-lg"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {
              msg?.success == false && <span className="text-red-600">{msg?.msg}</span>

            }
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              value={userPassword}
              onChange={(e)=>{setUserPassword(e.target.value)}}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white shadow-lg"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            {
              msg?.success == false && <span className="text-red-600">{msg?.msg}</span>
            }
          </div>
          <Button className="mt-6 ac-bg" fullWidth onClick={(e)=>submit(e)}>
            sign in
          </Button>
        </form>
      </div>
      </>
    );
  }

  export default Login
