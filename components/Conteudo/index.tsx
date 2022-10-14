import React from 'react'
import AnimateFadeDiv from '../../motion/AnimateFadeDiv'
import { UserLoggedContext } from '../../context/UserLoggedContext'

interface ConteudoProps {
	children: React.ReactNode
}

function Conteudo(props: ConteudoProps) {
	return (
		<section className='w-full p-5 bg-gray-300 text-black dark:text-white dark:bg-gray-700'>
			<AnimateFadeDiv>{props.children}</AnimateFadeDiv>
		</section>
	)
}

export default Conteudo
