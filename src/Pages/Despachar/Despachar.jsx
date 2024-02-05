import React from 'react'
import { LoginStyledContainer, LoginStyledWraper, PieDeLoginStyles, SubmitButton } from '../Login/LoginStyled'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import Input from '../../UI/Input/Input'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../axios/axiosUser'
import { setCurrentUser } from '../../redux/userSlice'

const initialValues={
    direccion:'',
    localidad:'',
    codigoPostal:'' 
}
const validationSchema= Yup.object({
    direccion: Yup.string().trim().required('Campo requerido'),
    localidad: Yup.string().trim().required('Campo requerido'),
    codigoPostal: Yup.string().trim().required('Campo requerido'),
})

const Despachar = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch =useDispatch()
  const navigate=useNavigate()
  console.log(currentUser)
  return (
    <LoginStyledContainer>
    <LoginStyledWraper>
            <h2>Confirmar Pedido</h2>           
               
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={async (values,actions)=> {
            //   // console.log({ values })
           
                
            //    navigate ("/")
            //   }
             
             
            // }
            >
             <Form>   
       <Input
                  name='direccion'
                //   label='Nombre'
                  type='text'
                  placeholder='Direccion'
                 
                 >
                </Input>
                <Input
                  name='localidad'
                //   label='password'
                  type='text'
                  placeholder='Localidad'
                 
                 >
                </Input>
                <Input
                  name='codigoPostal'
                //   label='password'
                  type='text'
                  placeholder='Codigo Postal'
                 
                 >
                </Input>
                <SubmitButton onClick={currentUser.verifield ?  ()=>navigate('/felicitaciones') : ()=>navigate('/verify')} >
                 Realizar Pedido
               </SubmitButton>
    
            </Form>
      
            </Formik>
            
            </LoginStyledWraper>
            </LoginStyledContainer>
  )
}

export default Despachar