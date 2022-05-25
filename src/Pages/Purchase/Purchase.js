import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
      });
  }, [id]);

  const handleBuyProduct = (event) => {
    event.preventDefault();
    const email = user?.email;
    const name = user.displayName;
    const tools = tool.name;
    const address = event.target.address.value;
    const orderQuantity = event.target.orderQuantity.value;
    const phone = event.target.phone.value;

    const info = {
      email,
      name,
      tools,
      address,
      phone,
      orderQuantity,
    };

    fetch("http://localhost:5000/order", {
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
    <>
      <div className="mt-20">
        <div className="card">
          <figure>
            <img className="rounded-lg" src={tool.image} alt="" />
          </figure>
          <div className="card-body text-center">
            <p>{tool.name}</p>
            <p>{tool.description}</p>
            <p>Price: ${tool.price}/unit</p>
            <p>Minimum Order Quantity: {tool.orderQuantity}</p>
            <p>Available Quantity: {tool.availableQuantity}</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <div className="text-2xl font-bold">
          <h1>Buy Product</h1>
        </div>
        <div className="form-control mt-5">
          <form onSubmit={handleBuyProduct}>
            <textarea
              name="address"
              type="text"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            <input
              name="phone"
              type="text"
              placeholder="Contact Number"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            <label className="label">
              <span className="w-full">Order Quantity</span>
            </label>
            <input
              name="orderQuantity"
              type="number"
              placeholder={tool.orderQuantity}
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            <button className="btn btn-primary text-white">Submit</button>
          </form>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Purchase;
