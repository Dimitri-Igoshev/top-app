import { useEffect, useState } from 'react';
import { Button, HTag, Rating } from '@/components';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
