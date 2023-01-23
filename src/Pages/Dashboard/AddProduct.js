import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const handleAddProduct = (event) => {
    event.preventDefault();
    const email = user?.email;
    const name = event.target.name.value;
    const description = event.target.description.value;
    const orderQuantity = parseInt(event.target.orderQuantity.value);
    const availableQuantity = parseInt(event.target.availableQuantity.value);
    const price = parseInt(event.target.price.value);
    const image = event.target.image.value;

    const info = {
      email,
      name,
      description,
      orderQuantity,
      availableQuantity,
      price,
      image,
    };

    fetch("https://electrific.onrender.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Product has been added successfully!");
        event.target.reset();
      });
  };

  return (
    <div className="text-center">
      <div className="text-2xl font-bold">
        <h1 className="uppercase">Add Product</h1>
      </div>
      <div className="mt-5">
        <form onSubmit={handleAddProduct}>
          <input
            name="name"
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <textarea
            name="description"
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <input
            name="orderQuantity"
            type="number"
            placeholder="Minimum Order Quantity"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <input
            name="availableQuantity"
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <input
            name="price"
            type="number"
            placeholder="Price (Per Unit Price)"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <button className="btn btn-primary text-white">Submit</button>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddProduct;
