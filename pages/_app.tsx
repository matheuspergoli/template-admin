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
						<meta name='keywords' content='admin, template, nextjs' />
						<meta name='author' content='Matheus Pergoli' />
						<meta property='og:title' content='Plataforma Admin NextJS' />
						<meta
							property='og:description'
							content='Utilize a melhor plataforma de administração para seus negócios e empresas'
						/>
						<meta property='og:image' content='/adm-template.jpg' />
					</Head>
					<Component {...pageProps} />
				</DarkModeContextProvider>
			</FormAtualContextProvider>
		</UserLoggedContextProvider>
	)
}

export default MyApp
