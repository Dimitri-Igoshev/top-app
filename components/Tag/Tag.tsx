import { TagProps } from '@/components/Tag/Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ children, size = 'm', color = 'default', href, className, ...props }: TagProps): JSX.Element => {
	return (
		<div className={cn(styles.tag, {
			[styles.s]: size === 's',
			[styles.m]: size === 'm',
			[styles.default]: color === 'default',
			[styles.red]: color === 'red',
			[styles.gray]: color === 'gray',
			[styles.green]: color === 'green',
			[styles.primary]: color === 'primary'
		}, className)} {...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
