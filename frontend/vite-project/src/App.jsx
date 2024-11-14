import React from 'react'
import StudentEntry from './Components/StudentEntry'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Display from './Components/Display'

function App() {
  return (
    <>
      <div className='p-4'>
        {/* */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <StudentEntry/>}></Route>
          <Route path='/list' element={ <Display/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App