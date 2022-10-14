import React from 'react'
import { Formik, Form, Field } from 'formik'
import { ValidationSchema } from '../../../model/ValidationSchema'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Formulario() {
	async function login(userInfo: { email: string; senha: string }) {
		try {
			const user = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.senha)
		} catch (error) {
			toast.error('Usuário inválido ou não existe', {
				autoClose: 3500,
				position: 'bottom-center'
			})
		}
	}

	return (
		<>
			<Formik
				onSubmit={(values) => login(values)}
				validationSchema={ValidationSchema}
				initialValues={{ senha: '', email: '' }}>
				{({ errors, touched }) => (
					<Form className='flex flex-col gap-2'>
						<Field
							id='email'
							name='email'
							type='email'
							placeholder='Digite seu email'
							className='w-full p-2 rounded-md border focus:outline-none placeholder:text-black bg-gray-300 focus:bg-white focus:border-blue-400'
						/>
						{errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}

						<Field
							id='senha'
							name='senha'
							type='password'
							placeholder='Digite sua senha'
							className='w-full p-2 rounded-md border focus:outline-none placeholder:text-black bg-gray-300 focus:bg-white focus:border-blue-400'
						/>
						{errors.senha && touched.senha && <p className='text-red-500'>{errors.senha}</p>}

						<button type='submit' className='w-full mb-3 mt-5 p-2 border rounded-md bg-gray-900 text-white'>
							Logar
						</button>
					</Form>
				)}
			</Formik>
			<ToastContainer />
		</>
	)
}

export default Formulario
