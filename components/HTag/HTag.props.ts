import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tag?: 1 | 2 | 3
	children: ReactNode
}
