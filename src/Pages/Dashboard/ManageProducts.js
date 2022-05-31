import React from "react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ManageProducts = ({ product, index, reload, setReload }) => {
  const { _id, name, price, orderQuantity, availableQuantity } = product;
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
    const url = `https://electrific.herokuapp.com/product/${_id}`;
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
    <tr>
      <th className="text-center">{index + 1}</th>
      <td>{name}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{availableQuantity}</td>
      <td className="text-center">{orderQuantity}</td>
      <td className="text-center">
        <label
          className="btn btn-xs btn-error text-white"
          onClick={() => submit()}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageProducts;