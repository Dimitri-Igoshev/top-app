import { HTagProps } from '@/components/HTag/HTag.props';
import styles from './HTag.module.css';
import cn from 'classnames';

export const HTag = ({ tag = 1, children, className, ...props }: HTagProps): JSX.Element => {
	switch (tag) {
		case 1:
			return <h1 className={cn(styles.h1, className)} {...props}>{children}</h1>;
		case 2:
			return <h2 className={cn(styles.h2, className)} {...props}>{children}</h2>;
		case 3:
			return <h3 className={cn(styles.h3, className)} {...props}>{children}</h3>;
		default:
			return <></>;
	}
};
