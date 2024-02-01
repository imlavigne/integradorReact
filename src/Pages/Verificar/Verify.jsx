import React from 'react'
import { LoginStyledContainer, LoginStyledWraper, SubmitButton } from '../Login/LoginStyled'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Input from '../../UI/Input/Input'
import { verifyUser } from '../../axios/axiosVerify'


const initialValues = {
    email: '',
    code: ''

}
const validationSchema = Yup.object({
    email: Yup.string().email('Correo inválido').required('Campo requerido'),
    code: Yup.string().trim().required('Campo requerido'),

})
const Verify = () => {
    return (
        <LoginStyledContainer>
            <LoginStyledWraper>
                <h2>Verificar Cuenta</h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, actions) => {
                        //  console.log({ values })
                        const usuario = await verifyUser(
                            values.email,
                            values.code,
                        )
                        console.log(usuario)
                        
                        actions.resetForm()
                    }}
                >
                    <Form>


                        <Input
                            name='email'

                            type='text'
                            placeholder='Ingrese su Correo Electronico'

                        ></Input>
                        <Input
                            name='code'
                            type='text'
                            placeholder='Ingrese su codigo de Verificacion'

                        >
                        </Input>


                        <SubmitButton type="submit" >
                            Enviar
                        </SubmitButton>

                    </Form>

                </Formik>

            </LoginStyledWraper>
        </LoginStyledContainer>
    )
}

export default Verify