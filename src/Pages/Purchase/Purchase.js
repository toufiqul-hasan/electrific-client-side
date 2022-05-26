import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `https://stormy-taiga-16041.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://stormy-taiga-16041.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(
          "Product has been ordered successfully! Go to dashboard to make payment."
        );
        reset();
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
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-bold uppercase">Customer Information</h1>
          <div className="mt-2">
            <h1>Name: {user.displayName}</h1>
            <h1>Email: {user.email}</h1>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <div className="text-2xl font-bold">
          <h1 className="uppercase">Buy Product</h1>
        </div>
        <div className="form-control mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Name"
              type="hidden"
              value={user.displayName}
              readOnly
              {...register("name")}
            />
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Email"
              type="hidden"
              value={user.email}
              readOnly
              {...register("email")}
            />
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Product Name"
              type="text"
              defaultValue={tool.name}
              readOnly
              {...register("tools", {
                required: {
                  value: true,
                  message: "Product Name is Required",
                },
              })}
            />
            <br />
            <br />
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Price"
              type="text"
              defaultValue={tool.price}
              readOnly
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <br />
            <br />
            <textarea
              className="input input-bordered w-full max-w-xs"
              placeholder="Address"
              required
              {...register("address")}
            />
            <br />
            <br />
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Contact Number"
              type="number"
              required
              {...register("phone")}
            />
            <br />
            <br />
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Order Quantity"
              required
              type="number"
              {...register("orderQuantity", {
                validate: {
                  minimumOrderQuantity: (value) =>
                    parseInt(value) >= tool.orderQuantity,
                  availableQuantity: (value) =>
                    parseInt(value) <= tool.availableQuantity,
                },
              })}
            />
            <br /> <br />
            {errors.orderQuantity &&
              errors.orderQuantity.type === "minimumOrderQuantity" && (
                <p className="text-red-600">
                  You can't order less than {tool.orderQuantity} pcs
                </p>
              )}
            {errors.orderQuantity &&
              errors.orderQuantity.type === "availableQuantity" && (
                <p className="text-red-600">
                  You can not order more than {tool.availableQuantity}
                </p>
              )}
            <br />
            <br />
            {(errors.orderQuantity && errors.orderQuantity.type) ||
            (errors.orderQuantity && errors.orderQuantity.type) ? (
              <input
                className="btn text-white"
                disabled="disabled"
                type="submit"
                value="Submit"
              />
            ) : (
              <input
                className="btn btn-primary text-white"
                type="submit"
                value="Submit"
              />
            )}
          </form>

          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Purchase;
