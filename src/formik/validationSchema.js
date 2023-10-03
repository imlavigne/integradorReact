import * as Yup from 'yup';

const phoneRegex = /\d{10}$/;

export const validationSchema = Yup.object({
  name: Yup.string().trim().required('Campo requerido'),
  surname: Yup.string().trim().required('Campo requerido'),
  age: Yup.number()
    .integer('Deber ser un numero entero')xxx
    .required('Campo Requerido'),
  email: Yup.string().email('Correo inválido').required('Campo requerido'),
  cellphone: Yup.string()
    .matches(phoneRegex, 'Celular inválido')
    .required('Campo requerido'),
  comments: Yup.string().max(255, 'Máximo de 255 caracteres').notRequired(),
});
