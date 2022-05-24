import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ManageProducts = ({ product, reload, setReload }) => {
  const {
    _id,
    email,
    name,
    description,
    orderQuantity,
    availableQuantity,
    price,
    image,
  } = product;

  // const navigate = useNavigate();
  // const navigateToServiceDetail = (id) => {
  //   navigate(`/inventory/${id}`);
  // };

  // const handleProductDelete = () => {
  //   const proceed = window.confirm("Do you really want to delete?");
  //   if (proceed) {
  //     const url = `https://thawing-retreat-14463.herokuapp.com/car/${_id}`;
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setReload(!reload);
  //       });
  //     toast("Product has been deleted successfully !");
  //   }
  // };

  return (
    <div class="card shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price: ${price}/unit</p>
        <p>Minimum Order Quantity: {orderQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <div class="card-actions">
          <button class="btn btn-primary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;