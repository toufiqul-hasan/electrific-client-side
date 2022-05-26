import React from "react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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

  const submit = () => {
    confirmAlert({
      title: "Do you really want to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleProductDelete(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleProductDelete = () => {
    const url = `https://stormy-taiga-16041.herokuapp.com/product/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
      });
    toast("Product has been deleted successfully !");
  };

  return (
    <div className="card shadow-lg">
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
            onClick={() => submit()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;