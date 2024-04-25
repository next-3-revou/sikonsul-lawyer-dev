// import React from 'react'
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import Master from "../../layout/master"
import { useSelector } from "react-redux";

const UserProfile = () => {
  const profile = useSelector((state) => state.profile.profile);
  console.log(profile)
  return (
    <Master type={"navbar"}>
      <div className="content h-full px-4">
        <div className="lawyer-profile-wrapper h-full pt-6">
          <div className="lawyer-profile-info flex flex-col h-full">
            <div className="lawyer-profile-info-detail flex flex-col">
              <div className="lawyer-profile-info-detail-avatar">
                <Avatar size={145} icon={<UserOutlined />} />
              </div>
              <div className="lawyer-profile-info-detail-identity">
                <h2 className="text-black text-xl text-center font-semibold">{profile.name}</h2>
                <h2 className="text-[#7D8797] text-base text-center">
                  <div>
                    {profile.specialization.map((spec, index) => (
                      <span key={index}>
                        {spec.specialization.name}
                        {index < profile.specialization.length - 1 && ", "}
                      </span>
                    ))}
                  </div>

                </h2>
              </div>
            </div>
            <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
              <div className="lawyer-profile-info-detail my-10">
                <div className="flex flex-col items-center py-2">
                  <div className="w-full py-4 border-b border-[#EEEEEE]">
                    <label
                      className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                      htmlFor="nik"
                    >
                      NIK
                    </label>
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      value={profile.nik}
                      disabled={true}
                    />
                  </div>
                  <div className="w-full py-4 border-b border-[#EEEEEE]">
                    <label
                      className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      value={profile.email}
                      disabled={true}
                    />
                  </div>
                  <div className="w-full py-4 border-b border-[#EEEEEE]">
                    <label
                      className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      value={profile.description}
                      disabled={true}
                    />
                  </div>
                  <div className="w-full py-4 border-b border-[#EEEEEE]">
                    <label
                      className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                      htmlFor="university"
                    >
                      University
                    </label>
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      value={profile.university}
                      disabled={true}
                    />
                  </div>
                  <div className="w-full py-4 border-b border-[#EEEEEE]">
                    <label
                      className="block text-[#7D8797] text-lg font-normal mb-2 text-left"
                      htmlFor="STRNumber"
                    >
                      STRNumber
                    </label>
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      value={profile.STRNumber}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Master>
  )
}

export default UserProfile