import React from 'react'
import { Avatar, Rate } from "antd";
import { UserOutlined } from '@ant-design/icons';
import RightChevron from '../../../uploads/right-chevron.png'



const ListCategoryLawyer = ({ name, speciality }) => {
  return (
    <div className="category-lawyer flex justify-between items-center border-b-2 border-[#EEEEEE] py-5 cursor-pointer">
      <div className="category-lawyer-info flex">
        <div className="category-lawyer-avatar">
          <Avatar size={52} icon={<UserOutlined />} />
        </div>
        <div className="category-lawyer-name px-5">
          <h2 className="text-black text-xl text-left">{name}</h2>
          <h2 className="text-[#7D8797] text-base text-left">{speciality}</h2>
        </div>
      </div>

      <div className="category-lawyer-chevron">
        <img src={RightChevron} className='w-6 h-6' alt="" />
      </div>
    </div>
  )
}

export default ListCategoryLawyer