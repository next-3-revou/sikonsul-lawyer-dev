// import React from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup'
import Master from '../../layout/master';
import { Buttons } from '../../component';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../layout/breadcrumb';

const SignUp = () => {
  const navigate = useNavigate()

  const initialValues = {
    fullname: '',
    email: '',
    nik: '',
    password: ''
  }

  const onPrev = e => {
    e.preventDefault()
    navigate(-1)
  }

  const validationSchema = yup.object({
    fullname: yup.string().required('This field required'),
    email: yup.string().required('This field required').email('Invalid format email'),
    nik: yup.string().required('This field required'),
    password: yup.string().required('This field required')
                       .min(8, 'Password is too short - should be 8 chars minimum.')
                       .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })

  const handleSignUp = async values => {
    console.log(values)
    navigate('/dashboard')
  }

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSignUp,
    validationSchema: validationSchema
  })

  return (
    <Master>
      <div className="content flex flex-col px-4">
        <Breadcrumb title={"Signup Account"} onClick={e => onPrev(e)} />
        <div className="content-form mt-48">
          <form onSubmit={formMik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullname"
                type="text"
                value={formMik.values.fullname || ''}
                onChange={formMik.handleChange('fullname')}
              />
              { formMik.errors.email && (
                  <p className="text-red-500 text-base text-left italic">{formMik.errors.fullname}</p>
              )}  
            </div>            
            <div className="mb-4">
              <label
                className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={formMik.values.email || ''}
                onChange={formMik.handleChange('email')}
              />
              { formMik.errors.email && (
                  <p className="text-red-500 text-base text-left italic">{formMik.errors.email}</p>
              )}  
            </div>
            <div className="mb-4">
              <label
                className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                htmlFor="nik"
              >
                NIK
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nik"
                type="text"
                value={formMik.values.nik || ''}
                onChange={formMik.handleChange('nik')}
              />
              { formMik.errors.nik && (
                  <p className="text-red-500 text-base text-left italic">{formMik.errors.nik}</p>
              )}  
            </div>              
            <div className="mb-6">
              <label
                className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={formMik.values.password || ''}
                onChange={formMik.handleChange('password')}		
              />
              { formMik.errors.password && (
                  <p className="text-red-500 text-base text-left italic">{formMik.errors.password}</p>
              )}  
            </div>
            <div className="flex items-center justify-between">
              <Buttons title={"Sign Up"} width={"w-full"} height={"h-12"} gap={"my-2"} tipe={"active"} />
            </div>
          </form>
        </div>
      </div>
    </Master>
  )
}

export default SignUp