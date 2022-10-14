import Head from 'next/head'
import Layout from '../components/Layout'

function Ajustes() {
	return (
		<>
			<Head>
				<title>Admin | Ajustes</title>
				<meta
					name='description'
					content='Sua página de ajustes do template admin, configure seu ambiente de trabalho e preferências.'
				/>
			</Head>
			<Layout>
				<h1 className='text-3xl font-bold'>Página Ajustes</h1>
				<p>Conteúdo da Página de Ajustes</p>
			</Layout>
		</>
	)
}

export default Ajustes
