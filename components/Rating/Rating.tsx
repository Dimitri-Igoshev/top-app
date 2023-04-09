import { RatingProps } from '@/components/Rating/Rating.props'
import styles from './Rating.module.css'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import StarIcon from './star.svg'

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	const changeDisplay = (i: number) => {
		if (!isEditable) return
		constructRating(i)
	}


	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const onClick = (i: number) => {
		if (!isEditable || !setRating) return
		setRating(i)
	}

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e) => e.code === 'Space' && onClick(i + 1)}
					/>
				</span>
			)
		})
		setRatingArray(updatedArray)
	}

	return (
		<div className={styles.block} {...props}>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	)
}
