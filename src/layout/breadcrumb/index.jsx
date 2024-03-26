/* eslint-disable react/prop-types */
// import React from 'react'
import chevront from '../../uploads/left-chevron.png'

const Breadcrumb = ({title, onClick, type}) => {
  return (
    <div className="breadcrumb">
      <div className={`breadcrumb-wrapper flex items-center ${type === 'profile' ? 'justify-between' : ''}`}>
        <div className="bread-icon cursor-pointer" onClick={onClick}>
          <img src={chevront} className='w-6 h-6' alt="" />
        </div>
        <div className="bread-title max-w-60 px-4">
          <h2 className='text-black text-2xl text-left font-bold'>{title}</h2>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Breadcrumb