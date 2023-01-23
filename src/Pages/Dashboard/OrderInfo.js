import React from "react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";

const OrderInfo = ({ orderInfo, index, reload, setReload }) => {
  const { _id, tools, price, orderQuantity } = orderInfo;
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
        setReload(!reload);
      });
    toast.error("Order cancelled!");
  };
  return (
    <tr>
      <th className="text-center">{index + 1}</th>
      <td>{tools}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{orderQuantity}</td>
      <td className="text-center">
        {orderInfo.price && !orderInfo.paid && (
          <Link to={`/dashboard/payment/${orderInfo._id}`}>
            <button className="btn btn-xs btn-success text-white">Pay</button>
          </Link>
        )}
        {orderInfo.price && orderInfo.paid && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction Id:{" "}
              <span className="text-success">{orderInfo.transactionId}</span>
            </p>
          </div>
        )}
      </td>
      <td className="text-center">
        {!orderInfo.paid && (
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

export default OrderInfo;
