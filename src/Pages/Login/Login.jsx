import React from 'react'
import { LoginStyledContainer, LoginStyledWraper, PieDeLoginStyles, SubmitButton } from './LoginStyled'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import Input from '../../UI/Input/Input'
import { Link } from 'react-router-dom'

const initialValues={
    email:'',
    password:'' 
}

const validationSchema= Yup.object({
    email: Yup.string().email('Correo inválido').required('Campo requerido'),
    password: Yup.string().trim().required('Campo requerido'),
})

const Login = () => {
    return (
        <LoginStyledContainer>
<LoginStyledWraper>
        <h2>Bienvenido</h2>           
           
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log({ values })
          resetForm()
        }}
        >
         <Form>   
   <Input
              name='email'
            //   label='Nombre'
              type='text'
              placeholder='Usuario'
             
             >
            </Input>
            <Input
              name='password'
            //   label='password'
              type='password'
              placeholder='Contraseña'
             
             >
            </Input>
            <SubmitButton type="submit" >
             Submit
           </SubmitButton>

        </Form>
  
        </Formik>
        <PieDeLoginStyles>
        <Link to='/verify'> 
        
        <p>Verificar Cuenta</p>
        </Link>
        <Link to='/register'>
        <p>¿No tenes cuenta? Registrate</p>
        </Link>
        </PieDeLoginStyles>
        </LoginStyledWraper>
        </LoginStyledContainer>

    )
}

export default Login