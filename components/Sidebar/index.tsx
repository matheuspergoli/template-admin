import { IconeHome, IconeAjustes, IconeSino, IconeSair } from '../../icons'
import ButtonDarkMode from './ButtonDarkMode'
import Logo from './Logo'
import MenuItem from './MenuItem'
import MenuItemLogout from './MenuItemLogout'
import { useRouter } from 'next/router'

function Sidebar() {
	const router = useRouter()

	return (
		<aside className='flex flex-col w-20 h-screen bg-white dark:bg-gray-900'>
			<Logo />
			<ul className='flex flex-col gap-2 flex-grow'>
				<MenuItem
					url='/'
					icone={IconeHome(6)}
					texto='Início'
					className={`${router.pathname === '/' ? 'text-blue-600 dark:text-blue-600' : ''}`}
				/>
				<MenuItem
					url='/ajustes'
					icone={IconeAjustes(6)}
					texto='Ajustes'
					className={`${router.pathname === '/ajustes' ? 'text-blue-600 dark:text-blue-600' : ''}`}
				/>
				<MenuItem
					url='/notificacoes'
					icone={IconeSino(6)}
					texto='Notificações'
					className={`${router.pathname === '/notificacoes' ? 'text-blue-600 dark:text-blue-600' : ''}`}
				/>
				<ButtonDarkMode />
			</ul>
			<ul>
				<MenuItemLogout icone={IconeSair(6)} texto='Sair' />
			</ul>
		</aside>
	)
}

export default Sidebar
