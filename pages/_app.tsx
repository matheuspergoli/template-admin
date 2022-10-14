import '../styles/globals.css'
import Head from 'next/head'
import { FormAtualContextProvider } from '../context/FormAtualContext'
import { UserLoggedContextProvider } from '../context/UserLoggedContext'
import { DarkModeContextProvider } from '../context/DarkModeContext'

function MyApp({ Component, pageProps }) {
	return (
		<UserLoggedContextProvider>
			<FormAtualContextProvider>
				<DarkModeContextProvider>
					<Head>
						<meta name='author' content='Matheus Pergoli' />
					</Head>
					<Component {...pageProps} />
				</DarkModeContextProvider>
			</FormAtualContextProvider>
		</UserLoggedContextProvider>
	)
}

export default MyApp
