/* eslint-disable no-unused-vars */
// import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import Master from '../../layout/master';
import { Buttons } from '../../component';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../layout/breadcrumb';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Spin, message } from 'antd';

const URL_AUTH = import.meta.env.VITE_BE_ENDPOINT_AUTH
const URL_SPESIALIZE = import.meta.env.VITE_BE_ENDPOINT_SPECIAL

const SignUp = () => {
  const navigate = useNavigate()

  const [load, setLoad] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const [specializationOptions, setSpecializationOptions] = useState([]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    NIK: '',
    address: '',
    university: '',
    description: '',
    alumnus: '',
    STRNumber: '',
    specializationIds: []
  }

  const onPrev = e => {
    e.preventDefault()
    navigate(-1)
  }

  const validationSchema = yup.object({
    name: yup.string().required('This field required'),
    email: yup.string().required('This field required').email('Invalid format email'),
    password: yup.string().required('This field required')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    NIK: yup.string().required('This field required'),
    address: yup.string().required('This field required'),
    university: yup.string().required('This field required'),
    description: yup.string().required('This field required'),
    alumnus: yup.string().required('This field required'),
    STRNumber: yup.string().required('This field required'),
    specializationIds: yup.array().of(yup.string().required('Specialization is required'))
  })

  const handleSignUp = async values => {
    try {
      setLoad(true);
      const { name, email, password, NIK, address, university, description, alumnus, STRNumber, specializationIds } = values;
      const data = {
        name,
        email,
        password,
        NIK,
        address,
        university,
        description,
        alumnus,
        STRNumber,
        specializationIds: specializationIds.map(id => parseInt(id))
      };
      console.log(data, 'haikal')
      const res = await axios.post(`${URL_AUTH}/register`, data);
      if (res.status === 201) {
        setLoad(false);
        messageApi.open({
          type: 'success',
          content: "Success Register",
        });

        setTimeout(() => {
          navigate('/signin', { replace: true });
        }, '2000');

      }

    } catch (error) {
      setLoad(false);
      let errorMessage = 'An error occurred';
      if (error.response) {
        if (error.response.data && error.response.data.error) {
          errorMessage = error.response.data.error;
        } else {
          errorMessage = `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        errorMessage = 'No response from server, please try again later';
      } else {
        errorMessage = error.message;
      }
      messageApi.open({
        type: 'error',
        content: errorMessage,
      });
    }
  };

  useEffect(() => {
    const fetchSpecialization = async () => {
      try {
        const response = await axios.get(`${URL_SPESIALIZE}`);
        setSpecializationOptions(response.data.data.specializations); // Menyimpan data specialization dari API ke state
      } catch (error) {
        console.error('Failed to fetch specialization:', error);
      }
    };

    fetchSpecialization();
  }, []);

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      handleSignUp(values);
    },
    validationSchema: validationSchema
  })

  return (
    <>
      {contextHolder}
      <Master>
        <div className="content flex flex-col px-4">
          <Breadcrumb title={"Signup Account"} onClick={e => onPrev(e)} />
          <div className="content-form mt-48">
            <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
              <form onSubmit={formMik.handleSubmit}>

                <div className="mb-4">
                  <label
                    className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={formMik.values.name || ''}
                    onChange={formMik.handleChange('name')}
                  />
                  {formMik.errors.name && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.name}</p>
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
                  {formMik.errors.email && (
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
                  {formMik.errors.password && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.password}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                    htmlFor="NIK"
                  >
                    NIK
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="NIK"
                    type="text"
                    value={formMik.values.NIK || ''}
                    onChange={formMik.handleChange('NIK')}
                  />
                  {formMik.errors.NIK && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.NIK}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    value={formMik.values.address || ''}
                    onChange={formMik.handleChange('address')}
                  />
                  {formMik.errors.address && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.address}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                    htmlFor="university"
                  >
                    University Degree
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="university"
                    type="text"
                    value={formMik.values.university || ''}
                    onChange={formMik.handleChange('university')}
                  />
                  {formMik.errors.university && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.university}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                    htmlFor="description"
                  >
                    Your Description
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    value={formMik.values.description || ''}
                    onChange={formMik.handleChange('description')}
                    rows={5}
                  />
                  {formMik.errors.description && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.description}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                    htmlFor="alumnus"
                  >
                    Your alumnus
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="alumnus"
                    value={formMik.values.alumnus || ''}
                    onChange={formMik.handleChange('alumnus')}
                    rows={5}
                  />
                  {formMik.errors.alumnus && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.alumnus}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                    htmlFor="STRNumber"
                  >
                    STR Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="STRNumber"
                    value={formMik.values.STRNumber || ''}
                    onChange={formMik.handleChange('STRNumber')}
                    rows={5}
                  />
                  {formMik.errors.STRNumber && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.STRNumber}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                    htmlFor={`specialization`}
                  >
                    Specialization
                  </label>
                  {specializationOptions && specializationOptions.length > 0 && (
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`specialization`}
                      name="specializationIds" // Tambahkan atribut name di sini
                      value={formMik.values.specializationIds || []}
                      onChange={(e) => {
                        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
                        formMik.setFieldValue('specializationIds', selectedOptions);
                      }}
                      multiple
                    >
                      {specializationOptions.map(option => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  )}
                  {formMik.errors.specializationIds && (
                    <p className="text-red-500 text-base text-left italic">{formMik.errors.specializationIds}</p>
                  )}
                </div>


                <div className="flex items-center justify-between">
                  <Buttons title={"Sign Up"} width={"w-full"} height={"h-12"} gap={"my-2"} tipe={"active"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Master>
      {load &&
        <div className="absolute inset-0 flex justify-center items-center z-[9999] bg-gray-400 bg-opacity-75">
          <Spin size="large" />
        </div>
      }
    </>
  )
}

export default SignUp