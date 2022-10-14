import * as Yup from 'yup'

export const ValidationSchema = Yup.object().shape({
	senha: Yup.string().min(6, 'Sua senha deve ter no mínimo 6 caracteres').required('Senha obrigatória'),
	email: Yup.string().email('Insira um email válido').required('Email obrigatório')
})
