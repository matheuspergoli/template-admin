import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface UserLoggedProps {
	children: React.ReactNode
}

export const UserLoggedContext = React.createContext(null)

export function UserLoggedContextProvider(props: UserLoggedProps) {
	const [user, setUser] = React.useState(null)

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser)
	})

	React.useEffect(() => {
		if (user?.email) {
			toast.success(`Bem vindo(a) ${user?.email}`, {
				position: 'top-center',
				autoClose: 2000
			})
		}
	}, [user])

	return (
		<>
			<UserLoggedContext.Provider value={{ user }}>{props.children}</UserLoggedContext.Provider>
			<ToastContainer />
		</>
	)
}
