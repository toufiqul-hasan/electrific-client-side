import React from "react";
import { toast } from "react-toastify";

const UserInfo = ({ userInfo, reload, setReload }) => {
  const { _id, education, location, phone, social } = userInfo;

  const handleUpdateInfo = () => {
    const proceed = window.confirm("Do you really want to update?");
    if (proceed) {
      const url = `https://stormy-taiga-16041.herokuapp.com/user-info/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(!reload);
        });
      toast(
        "Info has been deleted successfully! To update info please use add info form."
      );
    }
  };
  return (
    <div>
      <p>Education: {education}</p>
      <p>Location: {location}</p>
      <p>Phone: {phone}</p>
      <p>Social Link: {social}</p>
      <div className="flex justify-center mt-5">
        <button
          className="btn btn-primary text-white"
          onClick={() => handleUpdateInfo()}
        >
          Update Info
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
