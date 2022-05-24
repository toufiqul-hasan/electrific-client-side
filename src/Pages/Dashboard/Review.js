import React from 'react';

const Review = ({ review, reload, setReload }) => {
  const { description, rating } = review;
  return (
    <div className='text-justify'>
      <p>{description}</p>
      <p>Rating: {rating}⭐</p>
    </div>
  );
};

export default Review;