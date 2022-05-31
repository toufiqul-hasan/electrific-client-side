import React from "react";

const Review = ({ review, reload, setReload }) => {
  const { description, rating } = review;

  return (
    <div className="card shadow-lg text-justify">
      <div className="card-body">
        <p className="font-bold">{description}</p>
        <p className="font-bold">Rating: {rating}⭐</p>
      </div>
    </div>
  );
};

export default Review;