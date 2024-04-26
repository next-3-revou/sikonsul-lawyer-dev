/* eslint-disable react/prop-types */
// import React from 'react'
import { Avatar, Rate } from "antd";
import { UserOutlined } from '@ant-design/icons';


const ListLawyer = ({name, speciality,rating,onClick}) => {
  return (
    <div className="list-lawyer py-2 cursor-pointer" onClick={onClick}>
      <div className="list-lawyer-wrapper flex justify-between items-center">
        <div className="lawyer-profile flex items-center">
          <div className="lawyer-avatar">
            <Avatar size={52} icon={<UserOutlined />} />
          </div>
          <div className="lawyer-name px-5">
            <h2 className="text-black text-xl text-left">{name}</h2>
            <h2 className="text-[#7D8797] text-base text-left">{speciality}</h2>
          </div>
        </div>
        <div className="lawyer-rate">
          <Rate value={rating} disabled />
        </div>
      </div>
    </div>
  );
}

export default ListLawyer