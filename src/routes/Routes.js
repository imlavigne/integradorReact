// import React from 'react'

import { Routes as ReactDomRoutes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Carro from '../Carro/Carro'
import Verify from '../Pages/Verificar/Verify'
import Despachar from '../Pages/Despachar/Despachar'
import Felicitaciones from '../Pages/Felicitaciones/Felicitaciones'



const Routes = () => {
  return (
    <ReactDomRoutes>
      
        <Route path='/' element={<Home/>} />    
        <Route path='/home' element={<Home/>} />    
        <Route path='/login' element={<Login/>} />    
        <Route path='/register' element={<Register/>} />    
        <Route path='/verify' element={<Verify/>} />    
        <Route path='/despachar' element={<Despachar/>} />    
        <Route path='/felicitaciones' element={<Felicitaciones/>} />    
    </ReactDomRoutes>
  )
}

export default Routes