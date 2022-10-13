import React from 'react'
import CadastrarComGoogle from './CadastrarComGoogle'
import Formulario from './Formulario'
import Titulo from './Titulo'

function FormCadastro() {
	return (
		<section className='max-w-xs w-full p-5 rounded-md bg-white'>
			<Titulo titulo='Cadastrar' />
			<Formulario />
			<CadastrarComGoogle />
		</section>
	)
}

export default FormCadastro
