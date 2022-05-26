import React from "react";
import ManageOrders from "./ManageOrders";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const ManageOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://stormy-taiga-16041.herokuapp.com/orders", {
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
        <h1 className="text-center uppercase">Manage Order</h1>
      </div>
      <h1 className="text-center font-bold mb-4">
        Total Orders: {orders.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="text-center">
            <tr>
              <th>No.</th>
              <th>Customer Name</th>
              <th>Location</th>
              <th>Mobile Number</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Order Status</th>
              <th>Payment Status</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <ManageOrders
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              ></ManageOrders>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;