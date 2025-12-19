import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Navbar/>

     <Routes>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signin' element={<SignUp/>}></Route>
     </Routes>
    </>
  )
}

export default App
