import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import axiosPrivate from "../../api/axiosPrivate";
import OrderInfo from "./OrderInfo";

const Orders = () => {
  const [reload, setReload] = useState(true);
  const [orderInfo, setOrderInfo] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getOrderInfo = async () => {
      const email = user.email;
      const url = `https://stormy-taiga-16041.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrderInfo(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrderInfo();
  }, [user, navigate, reload]);
  return (
    <div>
      <div className="text-2xl font-bold">
        <h1 className="text-center uppercase">My Orders</h1>
      </div>
      <h2 className="text-center font-bold mb-4">
        Total Orders: {orderInfo.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Make Payment</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orderInfo.map((orderInfo, index) => (
              <OrderInfo
                key={orderInfo._id}
                index={index}
                orderInfo={orderInfo}
                reload={reload}
                setReload={setReload}
              ></OrderInfo>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
