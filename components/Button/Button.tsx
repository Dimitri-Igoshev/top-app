import { ButtonProps } from '@/components/Button/Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ primary, arrow, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.default]: !primary,
				[styles.primary]: primary
			})}
			{...props}
		>
			{children}
			{arrow &&
				<span className={cn(styles.arrow, {
					[styles.down]: arrow === 'down',
					[styles.right]: arrow === 'right'
				})}>
					<ArrowIcon />
				</span>
			}
		</button>
	);
};
