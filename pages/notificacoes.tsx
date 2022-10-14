import Head from 'next/head'
import Layout from '../components/Layout'

function Notificacoes() {
	return (
		<>
			<Head>
				<title>Admin | Notificações</title>
				<meta
					name='description'
					content='Sua página de notificações do template admin, ative ou modifique suas notificações.'
				/>
			</Head>
			<Layout>
				<h1 className='text-3xl font-bold'>Página Notificações</h1>
				<p>Conteúdo da Página de Notificações</p>
			</Layout>
		</>
	)
}

export default Notificacoes
