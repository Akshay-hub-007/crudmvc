  import axios from 'axios'
  import React, { useEffect, useState } from 'react'
  import {Trash2} from "lucide-react"
  function Display() {
  const [data,setData]=useState([])
      useEffect(()=>{
      const fetchData=async()=>{
          const res=await axios.get("http://localhost:3000/api/list")
          console.log(res.data)
          setData(res.data)
      }
          fetchData();
      },[])

      const handleDelete=async (id)=>{
    console.log(id)
   const res=await axios.delete("http://localhost:3000/api/delete",{data:{id}})
   console.log(res);
   setData(data.filter((item)=>item.id!==id));
  }
    return (
      <>
        <div className='flex flex-row gap-5'>
          {data && data.map((s,index)=>{
          return <div key={index} >
            
              <div className='border w-[15rem] h-[20rem]'>
              <img 
                      src={'https://via.placeholder.com/150'} 
                      className='w-full h-[10rem] object-cover'
                  />
                  <div className='p-3 gap-2'>
                  <div>Name: {s.name}</div>
                  <div>Age:  {s.age}</div>
                  <div>Grade: {s.grade}</div>
                  </div>
                  <div className='flex justify-center items-center'>
                <button className='flex justify-center items-center rounded-md bg-red-500 gap-2 p-2 w-30 h-10 text-center' onClick={()=>{handleDelete(s.id)}}> 
                  <Trash2 className='w-4 h-4' /> Delete
                </button>
              </div>
              </div>
          </div>

          })}
        </div>
      </>
    )
  }

  export default Display