import { LayoutProps } from '@/layout/Layout.props'
import { Header, Sidebar, Footer } from '@/layout'
import { FunctionComponent } from 'react'
import styles from './Layout.module.css'

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>
				{children}
			</div>
			<Footer className={styles.footer}/>
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return <Layout>
			<Component {...props} />
		</Layout>
	}
}
