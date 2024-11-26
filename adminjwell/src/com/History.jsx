import React, { useEffect, useLayoutEffect, useState } from 'react'
import api from './Api';
import { FaDownload } from 'react-icons/fa6';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const History = () => {
    const [userdata,setUserdata] = useState()
 
  const [search, setSearch] = useState([]);
  const navigate = useNavigate()
  const [fliterdata, setFilterdata] = useState();
  let arr = []

  const fetch = async() =>{
    await api.get("/getuser").then((res)=>{
      console.log(res.data.user)
      setUserdata(res.data?.user)
      const validHobbies = res.data?.user
      .map(item => item.history) // Get the history array
      .filter(history => history.length > 0); // Filter out empty arrays
    
    setFilterdata(validHobbies);  // Update state with non-empty arrays
    
    

    })
  }

 
  
  useEffect(()=>{
    fetch()
  },[])

  useLayoutEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login")
    }

    api.post("/adverify", {token: localStorage.getItem("token")}).then((res)=>{
      console.log(res.data)
      
    }).catch((err)=>{
      console.log(err)
    })

  },[])




  return (
    <>
    <div className='pt-[140px]'></div>
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 flex-wrap gap-5 px-5 w-full">
    {
    fliterdata?.map((el)=>{
        return(
            el.map((data, index)=>{
              
                  return(
                    <div className='w-full h-full  rounded-xl imagcont relative overflow-hidden historyContainer' key={index}>
                    <img id='testImg' className='w-full h-full rounded-xl'  src={data?.imgurl} key={data?.imgurl} alt="img" />
                    <span className='w-full h-full historyContent -bottom-[100%] absolute flex justify-center rounded-bl-xl'>{data?.prompts}</span>
                    </div>
                  )
              
          })
        )
    })
}
  
    </div>
   
  
    </>
  )
}

export default History