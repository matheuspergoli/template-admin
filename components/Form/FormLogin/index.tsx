import React from 'react'
import LoginComGoogle from './LoginComGoogle'
import Formulario from './Formulario'
import Titulo from './Titulo'
import { FormAtualContext } from '../../../context/FormAtualContext'

function FormLogin() {
	const { setFormAtual } = React.useContext(FormAtualContext)

	function mudarFormulario() {
		setFormAtual((prevForm: boolean) => !prevForm)
	}

	return (
		<section className='max-w-sm w-full p-5 rounded-md bg-white'>
			<Titulo titulo='Login' />
			<Formulario />
			<hr className='w-3/4 mx-auto border-gray-200' />
			<LoginComGoogle />
			<div className='text-lg mt-5 w-full text-black'>
				Ainda não possui conta?{' '}
				<button className='text-blue-800' onClick={mudarFormulario}>
					Crie uma
				</button>
			</div>
		</section>
	)
}

export default FormLogin
