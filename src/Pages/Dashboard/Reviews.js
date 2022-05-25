import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Review from "./Review";

const Reviews = () => {
  const [reload, setReload] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [user] = useAuthState(auth);

  const handleReview = (event) => {
    event.preventDefault();
    const email = user.email;
    const name = user.displayName;
    const description = event.target.description.value;
    const rating = event.target.rating.value;

    const info = { email, name, description, rating };

    fetch("https://stormy-taiga-16041.herokuapp.com/user-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Reviews has been added successfully!");
        setReload(!reload);
        event.target.reset();
      });
  };

  useEffect(() => {
    const email = user.email;
    const url = `https://stormy-taiga-16041.herokuapp.com/user-review?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reload, user.email]);

  return (
    <>
      <div>
        <div className="text-2xl font-bold">
          <h1 className="text-center uppercase">My Reviews</h1>
        </div>
        <h2 className="text-center font-bold mb-4">
          Total Reviews: {reviews.length}
        </h2>
        <div className="card">
          <div className="card-body grid grid-cols-1 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <Review
                key={review._id}
                review={review}
                reload={reload}
                setReload={setReload}
              ></Review>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <div className="text-2xl font-bold">
          <h1>Add Review</h1>
        </div>
        <div className="mt-5">
          <form onSubmit={handleReview}>
            <textarea
              className="textarea textarea-bordered w-80"
              name="description"
              type="text"
              placeholder="Description"
            ></textarea>
            <br />
            <br />
            <input
              name="rating"
              type="text"
              placeholder="Rating (out of 5)"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            <button className="btn btn-primary text-white">Submit</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Reviews;
