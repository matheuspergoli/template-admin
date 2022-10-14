import Head from 'next/head'
import FormAtual from '../components/Form/FormAtual'
import AuthLayout from '../components/Layout/AuthLayout'

function Autenticacao() {
	return (
		<>
			<Head>
				<title>Login / Cadastro</title>
				<meta name="description" content="Bem vindo a nossa página de cadastro do template admin, crie uma conta ou entre com o google para utilizar a plataforma." />
			</Head>
			<AuthLayout>
				<FormAtual />
			</AuthLayout>
		</>
	)
}

export default Autenticacao
