import React from 'react'
import Input from './Input'
import { useFormik } from 'formik'
import { CadastroSchema } from '../../../model/CadastroSchema'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Formulario() {
	const formik = useFormik({
		initialValues: {
			senha: '',
			email: ''
		},
		validationSchema: CadastroSchema,
		onSubmit: login
	})

	async function login() {
		if (formik.values && formik.values.email && formik.values.senha) {
			try {
				const { email, senha } = formik.values
				const user = await signInWithEmailAndPassword(auth, email, senha)
			} catch (error) {
				toast.error('Usuário inválido ou não existe', {
					autoClose: 3500,
					position: 'bottom-center'
				})
			}
		}
	}

	return (
		<>
			<form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
				<Input
					type='email'
					name='email'
					placeholder='Digite seu email'
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				{formik.errors.email ? <p className='text-red-500'>{formik.errors.email}</p> : null}

				<Input
					type='password'
					name='senha'
					placeholder='Digite sua senha'
					value={formik.values.senha}
					onChange={formik.handleChange}
				/>
				{formik.errors.senha ? <p className='text-red-500'>{formik.errors.senha}</p> : null}

				<button className='p-2 border rounded-md bg-gray-900 text-white' type='submit'>
					Entrar
				</button>
			</form>
			<ToastContainer />
		</>
	)
}

export default Formulario
