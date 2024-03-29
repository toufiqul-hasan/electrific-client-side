import React from "react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

const ManageOrders = ({ order, refetch, index }) => {
  const { _id, name, tools, orderQuantity, address, phone } = order;
  const submit = () => {
    confirmAlert({
      title: "Do you really want to cancel the order?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleCancelOrder(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleCancelOrder = () => {
    const url = `https://electrific.onrender.com/order/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
    toast.error("Order cancelled!");
  };

  const handleOrderStatus = () => {
    const url = `https://electrific.onrender.com/order/${_id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>{tools}</td>
      <td>{orderQuantity}</td>
      <td>
        {order.paid === true && order.status === true ? (
          <label className="btn btn-xs btn-success text-white">Shipped</label>
        ) : (
          <label
            className="btn btn-xs btn-info text-white"
            onClick={() => handleOrderStatus()}
          >
            Pending
          </label>
        )}
      </td>
      <td>
        {order.paid === true ? (
          <label className="btn btn-xs btn-success text-white">Paid</label>
        ) : (
          <label className="btn btn-xs btn-error text-white">Unpaid</label>
        )}
      </td>
      <td>
        {!order.paid && (
          <label
            onClick={() => submit()}
            className="btn btn-xs btn-error text-white"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default ManageOrders;
