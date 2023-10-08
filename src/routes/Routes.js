// import React from 'react'

import { Routes as ReactDomRoutes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'



const Routes = () => {
  return (
    <ReactDomRoutes>
        <Route path='/' element={<Home/>} />    
        <Route path='/login' element={<Login/>} />    
        <Route path='/register' element={<Register/>} />    
    </ReactDomRoutes>
  )
}

export default Routes