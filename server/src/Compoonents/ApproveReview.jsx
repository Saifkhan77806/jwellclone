import React, { useEffect, useState } from 'react'
import { TiTickOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import api from './Api';


const ApproveReview = () => {
    const [data, setData] = useState()
    const [filter, setFilter] = useState()
    const [up,setUp] = useState()
    let filtered
    useEffect(() => {
        api.get("/get-review").then((res) => {
            console.log(res.data)

           setFilter(res.data.filter((el) => el?.approve == false))

            console.log(filter)
        })
    }, [data, up])
    

    const delteReview = (id) =>{
        api.delete(`/delete-review/${id}`).then((res)=>{
            console.log(res.data)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }


    const approveReview = (id) =>{
        api.post(`/update-review`, {id}).then((res)=>{
            console.log(res.data)
            setUp(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }






    return (
        <>
            <div className='max-md:pt-[120px]'></div>
            <h1 className='text-center luxuria font-bold text-3xl my-10'><i>Approve Review</i></h1>
            <div className='grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-10'>
                {
                    filter?.map((el, index)=>{
        return <div key={index} className=' h-[400px] rounded-md mx-5 mb-10 flex flex-col bg-light shadow-xl relative'>
                    <div className='flex absolute right-2 top-2'>
                        <TiTickOutline className='cursor-pointer mx-3 ac-color' onClick={()=>approveReview(el?._id)} />
                        <MdDelete className='cursor-pointer ac-color' onClick={()=>delteReview(el?._id)} />
                    </div>

                    <div className='flex flex-col my-4 mx-3 text-center'>
                        <p className='poppins font-bold'>{el?.name}</p>
                        <p className='poppins font-bold'>{el?.email}</p>
                    </div>

                    <div>
                        <p className='poppins font-semibold text-center'>{el?.rates}.7 stars Review</p>
                    </div>

                    <div className='px-5 luxuria font-medium italic my-7'>
                       {el?.message}
                    </div>
                </div>
                    })
                }
            </div>

        </>
    )
}

export default ApproveReview