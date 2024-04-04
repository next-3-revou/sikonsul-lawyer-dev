// import { useState } from 'react'
// import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import Master from '../../layout/master';
import { Buttons } from '../../component';

const SignIn = () => {
  const navigate = useNavigate()
  // const [messageApi, contextHolder] = message.useMessage();

	// const [loading, setLoading] = useState(false)

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = yup.object({
    email: yup.string().required('This field required').email('Invalid format email'),
    password: yup.string().required('This field required')
                       .min(8, 'Password is too short - should be 8 chars minimum.')
                       .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })

  const handleLogin = async values => {
    console.log(values)
    navigate('/dashboard')
  }

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleLogin,
    validationSchema: validationSchema
  })

  return (
    <Master>
      <div className="content flex flex-col px-4">
        <div className="bread-title max-w-60 px-4">
          <h2 className='text-black text-2xl text-left font-bold'>Sign In Lawyer</h2>
        </div>
        <div className="content-form mt-48">
          <form onSubmit={formMik.handleSubmit}>
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
              <Buttons title={"Sign In"} width={"w-full"} height={"h-12"} gap={"my-2"} tipe={"active"} />
            </div>
          </form>
        </div>
      </div>
    </Master>
  )
}

export default SignIn