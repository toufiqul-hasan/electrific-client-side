import React, { useEffect, useState } from "react";
import UserReview from "./UserReview";

const UserReviews = () => {
  const [reload, setReload] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `https://stormy-taiga-16041.herokuapp.com/user-reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reload]);
  return (
    <div className="text-center section-title mt-10">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="card">
        <div className="card-body grid grid-cols-1 lg:grid-cols-3 gap-5">
          {reviews.slice(0, 3).map((review) => (
            <UserReview
              key={review._id}
              review={review}
              reload={reload}
              setReload={setReload}
            ></UserReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
