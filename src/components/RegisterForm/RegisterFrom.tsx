import React, { useState } from 'react'
import RegisterFormInput from './RegisterFormInput'
import "./RegisterForm.scss"
const RegisterFrom = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    username: "" ,
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placholder: "Username",
      label: "Username"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placholder: "Email",
      label: "Email"
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placholder: "Password",
      label: "Password"
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placholder: "Confirm Password",
      label: "Confirm Password"
    }
  ] as const


  const handlSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  }

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  return (
    <form onSubmit={handlSubmit} className='form-container'>
      <h2>Register</h2>
      {inputs.map((input) => (
        <RegisterFormInput 
          key={input.id}
          value={formData[input.name]} 
          onChange={handlChange}
          {...input} 
          />
      ))}

      <button type="submit" disabled={isSubmitting}>Sumbit</button>
    </form>
  )
}

export default RegisterFrom