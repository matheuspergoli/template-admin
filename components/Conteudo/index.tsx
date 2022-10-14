import React from 'react'
import { IconeUser } from '../../icons'
import AnimateFadeDiv from '../../motion/AnimateFadeDiv'
import { UserLoggedContext } from '../../context/UserLoggedContext'

interface ConteudoProps {
	children: React.ReactNode
}

function Conteudo(props: ConteudoProps) {
	const { user } = React.useContext(UserLoggedContext)

	return (
		<section className='flex justify-between w-full p-5 bg-gray-300 text-black dark:text-white dark:bg-gray-700'>
			<AnimateFadeDiv>{props.children}</AnimateFadeDiv>
			{user?.email && (
				<div className='flex gap-2'>
					<h2 className='hidden sm:block'>
						Bem vindo(a) {user?.displayName ? user.displayName : user.email}
					</h2>
					<div className='hidden sm:block sm:w-6'>{IconeUser(6)}</div>
				</div>
			)}
		</section>
	)
}

export default Conteudo
