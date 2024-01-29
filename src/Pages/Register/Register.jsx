import React from 'react'
import { LoginStyledContainer, LoginStyledWraper, PieDeLoginStyles, SubmitButton } from '../Login/LoginStyled'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import Input from '../../UI/Input/Input'
import { createUser } from '../../axios/axiosUser'

const initialValues = {
  name: '',
  email: '',
  celphone: '',
  password: ''
}
const phoneRegExp = /\d{10}$/;
const validationSchema = Yup.object({
  email: Yup.string().email('Correo inválido').required('Campo requerido'),
  password: Yup.string().trim().required('Campo requerido'),
  // celphone: Yup.string().trim().required('Campo requerido'),
  cellphone: Yup.string().matches(phoneRegExp, 'Numero Invalido').required('Campo requerido'),
  nombre: Yup.string().trim().required('Campo requerido'),

})

const Register = () => {

  return (
    <LoginStyledContainer>
      <LoginStyledWraper>
        <h2>Registrate</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            // console.log({ values })
            const usuario = await createUser(
              values.nombre,
              values.email,
              values.password,
              values.cellphone,
            )
            actions.resetForm()
          }}
        >
          <Form>
            <Input
              name='nombre'
              //   label='Nombre'
              type='text'
              placeholder='Ingrese su Nombre'

            >
            </Input>
            {/* <Input
                  name='surname'
    
                  type='text'
                  placeholder='Ingrese su Apellido'
    
                ></Input> */}
            <Input
              name='email'

              type='text'
              placeholder='Ingrese su Correo Electronico'

            ></Input>
            <Input
              name='password'

              type='Password'
              placeholder='Ingrese su Contraseña'

            ></Input>
            <Input
              name='cellphone'

              type='number'
              placeholder='Ingrese su Celular'

            ></Input>

            <SubmitButton type="submit" >
              Enviar
            </SubmitButton>

          </Form>

        </Formik>

      </LoginStyledWraper>
    </LoginStyledContainer>
  )
}

export default Register