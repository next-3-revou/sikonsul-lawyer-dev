// import React from 'react'
import { useNavigate  } from 'react-router-dom';
// import Buttons from "../../atom/Button"

const Navbar = () => {
	// const navigate = useNavigate();

	// const profilePage = (e) => { 
	// 	e.preventDefault();
	// 	console.log('tes')
	// }

	// const addWishlist = (e) => {
	// 	e.preventDefault();
	// 	navigate('/wishlist')
	// 	console.log('add')
	// }

	// const historyPage = (e) => {
	// 	e.preventDefault();
	// 	console.log('history')
	// }

	return (
    <>
		<div className="fixed inset-x-0 bottom-0 z-10 mx-auto flex min-h-[72px] max-w-[425px] items-center bg-[#112340] p-4 notched">
			<div className="flex w-full justify-evenly items-end ">
				<div className="menus px-2">
					<button>Home</button>
				</div>
				<div className="menus px-2">
          <button>Message</button>
				</div>
				<div className="menus px-2">
          <button>News</button>
				</div>
			</div>
		</div>
    </>

	)
}

export default Navbar