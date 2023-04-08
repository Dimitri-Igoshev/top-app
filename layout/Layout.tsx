import { LayoutProps } from '@/layout/Layout.props'
import { Header, Sidebar, Footer } from '@/layout'
import { FunctionComponent } from 'react'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header/>
			<div>
				<Sidebar/>
				<div>
					{children}
				</div>
			</div>
			<Footer/>
		</>
	)
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return <Layout>
			<Component {...props} />
		</Layout>
	}
}
