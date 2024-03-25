/* eslint-disable react/prop-types */
// import React from 'react'
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

const Users = ({ name }) => {
  return (
    <div className="content px-4">
      <div className="users-section flex">
        <div className="avatar-image">
          <Avatar size={52} icon={<UserOutlined />} />
        </div>
        <div className="avatar-caption text-center px-2">
          <h2 className="text-black text-xl">{name}</h2>
        </div>
      </div>
    </div>
  )
}

export default Users