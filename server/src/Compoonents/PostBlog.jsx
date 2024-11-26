import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { IoCloudUpload } from "react-icons/io5";
import { Button } from '../../components/ui/button';
import { FaGear } from "react-icons/fa6";
import { Input, Typography } from '@material-tailwind/react';

const PostBlog = () => {
    
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
    
  return (
    <>
    <div className='max-md:pt-[120px]'></div>
     <div className='flex items-center justify-center flex-col w-full'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
            <div className=' w-[600px] h-[200px] bg-light my-10 mx-auto px-10 rounded-lg shadow-xl flex justify-center items-center flex-col max-md:w-[200px]'>
            <FaGear  className='text-[70px] ac-color drop-shadow-md animate-spin'/>
            <p className='poppins italic font-medium'>Drop here files !</p>
            </div>
           :
              <div className='px-10 w-[600px] h-[200px] bg-light my-10 mx-auto rounded-lg shadow-xl flex justify-center items-center flex-col max-md:w-[200px]'>
                <IoCloudUpload  className='text-[70px] ac-color drop-shadow-md animate-bounce'/>
                <p className='poppins italic font-medium'>upload here through Drag 'n drop </p>
              </div>
          }
        </div>
        <form action="" className='flex flex-col'>
 <div className="relative h-11 w-full min-w-[200px] mx-5 shadow-lg">
      <input placeholder="your Title"
        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 poppins bg-light" />
      <label
        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 poppins font-semibold">
        Title
      </label>
    </div>
    <div className="relative w-full min-w-[200px] mx-5 my-5">
    <textarea
      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 poppins bg-light shadow-lg"
      placeholder=""></textarea>
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] text-gray-500  leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 poppins font-semibold">
      Message
    </label>
  </div>
        </form>
        <Button className="my-10 px-10 ac-bg hover:bg-[#5a7a45] ">Post</Button>
</div>
    </>
  )
}

export default PostBlog