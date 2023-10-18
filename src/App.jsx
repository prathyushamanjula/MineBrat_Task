import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import States from './Component/States'
import Display from './Component/Display'
import './Global.css'

const App = () => {
  return (
    <BrowserRouter>
      |
        <Routes>
          <Route path='/' element={<States/>}/>
          <Route path='/display' element={<Display/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App