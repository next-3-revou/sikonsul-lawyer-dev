// Import useEffect, useState, useLocation, and getProfile
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProfile } from '../../services';
// Import Avatar and UserOutlined from Ant Design
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// Import Master layout
import Master from '../../layout/master';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../layout/breadcrumb';

const ProfilePage = () => {
    // Get the lawyerId from the URL
    const location = useLocation();
    const lawyerId = location.pathname.split('/').pop();
    const [lawyer, setLawyer] = useState({});
    const navigate = useNavigate()


    const onPrev = e => {
        e.preventDefault()
        navigate(-1)
      }

    // Fetch lawyer profile data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProfile(lawyerId);
                setLawyer(result.data.lawyer);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [lawyerId]);

    return (
        <Master type={"navbar"}>
            <Breadcrumb title={"Profile Lawyer"} onClick={e => onPrev(e)} type={"category"} />
            <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <div className="flex items-center">
                            <Avatar size={64} icon={<UserOutlined />} />
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold">{lawyer.name}</h1>
                                <p className="text-gray-600">{lawyer.email}</p>
                                <p className="text-gray-600">NIK: {lawyer.NIK}</p>
                                <p className="text-gray-600">Universitas: {lawyer.university}</p>
                                <p className="text-gray-600">Deskripsi: {lawyer.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                        <h2 className="text-lg font-semibold">Profile:</h2>
                        {lawyer.profile && lawyer.profile.map((profile, index) => (
                            <div key={index} className="mt-4">
                                <p><span className="font-semibold">Alumni:</span> {profile.alumnus}</p>
                                <p><span className="font-semibold">STR Number:</span> {profile.STRNumber}</p>
                                <p><span className="font-semibold">Experience:</span> {profile.experience || 'Not provided'}</p>
                                <p><span className="font-semibold">Specialization:</span>
                                    {profile.specialization && profile.specialization.map((spec, index) => (
                                        <span key={index}>{spec.specialization.name}{index < profile.specialization.length - 1 ? ', ' : ''}</span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="px-6 py-4 flex justify-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Contact Lawyer</button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Schedule Appointment</button>
                    </div>
                </div>
            </div>
        </Master>
    );
};

export default ProfilePage;
