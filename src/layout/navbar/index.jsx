// import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
	HomeOutlined,
	MessageOutlined,
	UserOutlined,
	LogoutOutlined
} from '@ant-design/icons';
import { clearToken } from '../../redux/actions';
import { message } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const Navbar = () => {
	const navigate = useNavigate();
	const [messageContent, setMessageContent] = useState('');
	const dispatch = useDispatch();

	const Home = (e) => {
		e.preventDefault();
		navigate('/dashboard')
	}

	const Message = (e) => {
		e.preventDefault();
		navigate('/message')
	}

	const profilePage = (e) => {
		e.preventDefault();
		navigate('/profile')
	}

	const logout = (e) => {
		e.preventDefault()
		dispatch(clearToken())
		setMessageContent('Success SignOut');
		setTimeout(() => {
			setMessageContent('');
		}, 3000);
		navigate('/')
	}

	return (
		<>
			<div className="fixed inset-x-0 bottom-0 z-10 mx-auto flex min-h-[72px] max-w-[425px] items-center bg-[#112340] p-4 notched">
				<div className="flex w-full justify-evenly items-end ">
					<div className="menus px-2 flex flex-col items-center cursor-pointer" onClick={e => Home(e)}>
						<HomeOutlined style={{ fontSize: '26px' }} />
						<h2 className='text-white'>Home</h2>
					</div>
					<div className="menus px-2 flex flex-col items-center cursor-pointer" onClick={e => Message(e)}>
						<MessageOutlined style={{ fontSize: '26px' }} />
						<h2 className='text-white'>Message</h2>
					</div>
					<div className="menus px-2 flex flex-col items-center cursor-pointer" onClick={e => profilePage(e)}>
						<UserOutlined style={{ fontSize: '26px' }} />
						<h2 className='text-white'>Profile</h2>
					</div>
					<div className="menus px-2 flex flex-col items-center cursor-pointer" onClick={(e) => logout(e)}>
						<LogoutOutlined style={{ fontSize: '26px' }} />
						<h2 className='text-white'>Logout</h2>
					</div>

				</div>
			</div>
		</>

	)
}

export default Navbar