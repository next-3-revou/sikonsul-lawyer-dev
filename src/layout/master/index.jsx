/* eslint-disable react/prop-types */

import Navbar from '../navbar'
import './styles.css'

const Master = ({children, type}) => {
  return (
    <>
		<main className="bg-gray-200">
				<section
						// className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white"
						className={`relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col ${type === 'front' ? 'bg-images' : 'bg-white'} `}						
						style={{ opacity: 1, transform: "none" }}
				>
					<section className="flex h-full flex-col overflow-x-hidden">
						<div className={`container flex h-full flex-col pb-4 pt-6`}>
							<div className="flex h-full flex-col">
								{children}
								{type === 'navbar' &&
									<Navbar />
								}
							</div>
						</div>
					</section>
			</section>
		</main>
    </>
  )
}

export default Master