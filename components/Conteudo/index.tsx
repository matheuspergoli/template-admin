import React from 'react'
import { ReactNode } from 'react'
import AnimateFadeDiv from '../../motion/AnimateFadeDiv'
import { UserLoggedContext } from '../../context/UserLoggedContext'

interface ConteudoProps {
	children: ReactNode
}

function Conteudo(props: ConteudoProps) {
	const { user } = React.useContext(UserLoggedContext)

	return (
		<section className='flex justify-between w-full p-5 bg-gray-300 text-black dark:text-white dark:bg-gray-700'>
			<AnimateFadeDiv>{props.children}</AnimateFadeDiv>
			{user?.email && (
				<h2 className='hidden sm:block'>Bem vindo(a) {user?.displayName ? user.displayName : user.email}</h2>
			)}
		</section>
	)
}

export default Conteudo
