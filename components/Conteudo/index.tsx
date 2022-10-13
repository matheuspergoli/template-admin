import { ReactNode } from 'react'

interface ConteudoProps {
	children: ReactNode
}

function Conteudo(props: ConteudoProps) {
	return (
		<section className='w-full p-5 bg-gray-300 text-black dark:text-white dark:bg-gray-700'>
			{props.children}
		</section>
	)
}

export default Conteudo
