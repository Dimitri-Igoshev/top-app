import { SidebarProps } from '@/layout/Sidebar/Sidebar.props'
import { Menu } from '@/layout'

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	)
}
