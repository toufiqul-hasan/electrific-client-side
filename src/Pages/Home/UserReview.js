import React from "react";

const UserReview = ({ review, reload, setReload }) => {
  const { description, rating } = review;
  return (
    <div className="card">
      <div className="card-body text-justify">
        <p className="font-bold">{description}</p>
        <p className="font-bold">Rating: {rating}⭐</p>
      </div>
    </div>
  );
};

export default UserReview;