import React from "react";
import { toast } from "react-toastify";

const ManageProducts = ({ product, reload, setReload }) => {
  const {
    _id,
    name,
    description,
    orderQuantity,
    availableQuantity,
    price,
    image,
  } = product;

  const handleProductDelete = () => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      const url = `https://stormy-taiga-16041.herokuapp.com/product/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(!reload);
        });
      toast("Product has been deleted successfully !");
    }
  };

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
          <button
            className="btn btn-primary text-white"
            onClick={() => handleProductDelete()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
