import React from 'react'
import "./RegisterForm.scss"

type RegisterFormInputProps = {
    // id: number,
    label: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
  }

const RegisterFormInput: React.FC<RegisterFormInputProps> = (props: RegisterFormInputProps) => {
  const {label, onChange, ...inputProps} = props
  return (
    <div className='form-inputs'>
        <input className='custom-input' {...inputProps} onChange={onChange}/>
        <label>{label}</label>
    </div>
  )
}

export default RegisterFormInput