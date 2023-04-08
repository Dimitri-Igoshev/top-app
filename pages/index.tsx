import { useState } from 'react';
import { Rating } from '@/components';
import { withLayout } from '@/layout'

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home)
