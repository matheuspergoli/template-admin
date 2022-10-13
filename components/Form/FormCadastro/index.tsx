import React from 'react'
import CadastrarComGoogle from './CadastrarComGoogle'
import Formulario from './Formulario'
import Titulo from './Titulo'
import { FormAtualContext } from '../../../context/FormAtualContext'

function FormCadastro() {
	const { setFormAtual } = React.useContext(FormAtualContext)

	function mudarFormulario() {
		setFormAtual((prevForm: boolean) => !prevForm)
	}

	return (
		<section className='max-w-sm w-full p-5 rounded-md bg-white'>
			<Titulo titulo='Cadastrar' />
			<Formulario />
			<CadastrarComGoogle />
			<div className='text-lg mt-5 w-full text-black'>
				Já possui conta?{' '}
				<button className='text-blue-800' onClick={mudarFormulario}>
					Faça login
				</button>
			</div>
		</section>
	)
}

export default FormCadastro
