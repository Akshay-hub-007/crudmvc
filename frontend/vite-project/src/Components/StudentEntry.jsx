import axios from 'axios'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function StudentEntry() {

  const [details,setDetails]=useState([])
  const [name,setName]=useState()

  const [age,setAge]=useState()
  const [grade,setGrade]=useState()

  const handleSubmit=async(e)=>
  {
    const newEntry={name,age,grade}
    e.preventDefault();
     setDetails((prev)=>[
      ...prev,newEntry
    ])
    console.log(details)
    const res= await  axios.post("http://localhost:3000/api/entry",newEntry)
  console.log("ugdiu")
    console.log(res)
  }
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleAge=(e)=>{
    setAge(e.target.value)
  }
  const handleGrade=(e)=>{
    setGrade(e.target.value)
  }
  return (
     <>
       <div className='grid place-items-center h-screen w-scree '>
        <form action="" onSubmit={handleSubmit}>

        <div className='w-[20rem] h-[25rem] border p-5 flex flex-col '>
           <div className='text-center'>Enter student Details</div>
            <label htmlFor="name">Name:</label>
             <input id="name" type="text" value={name} onChange={handleName} placeholder='enter the student name' className='border rounded-lg p-2 ' required /> <br />
             <label htmlFor="age">Age:</label>
             <input type="number" id="age"   placeholder="enter your age" onChange={handleAge} value={age} className='border rounded-lg p-2 ' required/> <br />
             <label htmlFor="grade">Grade:</label>
              <input type="number" id="grade"  placeholder='enter your grade' onChange={handleGrade} value={grade} className='border rounded-lg p-2 ' required />
            
              <input type="submit" className=' mt-2 rounded-md border bg-blue-400 p-3'/>
             <NavLink to={"/list"}><span>see student list</span></NavLink> 
          

           </div>
        </form>
          
       </div>
     </>
  )
}

export default StudentEntry