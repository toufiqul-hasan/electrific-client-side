import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="card shadow-xl">
      <figure>
        <img className="rounded-lg" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price: ${price}/unit</p>
        <p>Minimum Order Quantity: {orderQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <div className="card-actions">
          <Link to="/purchase">
            <button className="btn btn-primary text-white">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTool;
