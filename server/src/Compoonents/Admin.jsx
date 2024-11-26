import React from 'react'
import Adhome from './Adhome'
import { useAuth } from '../../store/auth'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  const {user} = useAuth()
  if(user?.userData?.provider != "admin"){
    navigate("/")
  }
  return (
    <>
    <div className='pt-[130px] max-md:pt-[69px]'></div>
    <Adhome />
    </>
  )
}

export default Admin