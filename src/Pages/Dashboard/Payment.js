import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3cHJHyVhYAs7qjkCVPJ5dmgK4jQ5cf6wpfN331Sq8J54rnemELtMoUbSqx4lhs43tfm0gQ8xgM1deoWjLEDIov007zDciX1J"
);

const Payment = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://stormy-taiga-16041.herokuapp.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="text-2xl font-bold">
        <h1 className="text-center uppercase">Payment</h1>
      </div>
      <div className="">
        <div className="card max-w-md bg-base-200 shadow-lg my-5">
          <div className="card-body">
            <h1 className="card-title">Hello, {user.displayName}</h1>
            <p>Product Name: {order.tools}</p>
            <p>Order Quantity: {order.orderQuantity}</p>
            <p>Please Pay: ${order.price}</p>
          </div>
        </div>
        <div className="card max-w-md bg-base-200 shadow-lg">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
