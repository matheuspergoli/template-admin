import Head from 'next/head'
import Layout from '../components/Layout'

function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name='description' content='Bem vindo a sua página de administração do template admin, configure da forma que quiser seu ambiente.' />
			</Head>
			<Layout>
				<h1 className='text-3xl font-bold'>Página Principal</h1>
				<p>Conteúdo da Página Principal</p>
			</Layout>
		</>
	)
}

export default Home
