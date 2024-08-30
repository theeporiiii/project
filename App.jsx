import { useState } from 'react'
import './App.css'
import Signin from './components/Signin'
import {  Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Signin />}/>
      <Route path='/sign' element={<Signup/>}/>

    </Routes>
  )
}

export default App
