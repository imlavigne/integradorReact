import { ErrorMessage, Field } from "formik";
import React from 'react'
import { InputLabelStyled, InputBoxStyled, ErrorStyled, InputStyled } from './ImputStyled'
const Input = ({ name, label, type, isError, placeholder }) => {
  return (
    <>
      <InputBoxStyled>
        <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
        <Field
          name={name}
          type={type}
          id={label}
          placeholder={placeholder}
          error={isError}
          as={InputStyled}
        />
        <ErrorMessage name={name} component={ErrorStyled} />
      </InputBoxStyled>
    </>
  )
}

export default Input