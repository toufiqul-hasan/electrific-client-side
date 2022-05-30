import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedTool = ({ product, reload, setReload }) => {
  const {
    _id,
    name,
    description,
    orderQuantity,
    availableQuantity,
    price,
    image,
  } = product;

  const navigate = useNavigate();

  const navigateToToolDetail = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div className="card shadow-2xl">
      <figure>
        <img className="rounded-lg w-full" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price: ${price}/unit</p>
        <p>Minimum Order Quantity: {orderQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary text-white"
            onClick={() => navigateToToolDetail(_id)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTool;