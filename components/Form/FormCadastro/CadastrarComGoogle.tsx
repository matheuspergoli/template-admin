import React from 'react'
import { auth } from '../../../firebase/config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

function CadastrarComGoogle() {
	async function loginComGoogle() {
		try {
			const provider = new GoogleAuthProvider()
			const user = await signInWithPopup(auth, provider)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<button
			className='mt-3 w-full p-2 border rounded-md bg-red-500 text-white'
			type='submit'
			onClick={loginComGoogle}>
			Cadastrar com Google
		</button>
	)
}

export default CadastrarComGoogle
