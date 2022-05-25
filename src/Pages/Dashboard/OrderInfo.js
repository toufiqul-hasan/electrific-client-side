import React from "react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

const OrderInfo = ({ orderInfo, index, reload, setReload }) => {
  const { _id, tools, orderQuantity } = orderInfo;

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
    const url = `http://localhost:5000/order/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
      });
    toast.error("Order cancelled!");
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{tools}</td>
      <td>{orderQuantity}</td>
      <td>
        <label
          // onClick={() => handleCancelOrder()}
          className="btn btn-xs btn-success text-white"
        >
          Pay
        </label>
      </td>
      <td>
        <label
          onClick={() => submit()}
          className="btn btn-xs btn-error text-white"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default OrderInfo;
