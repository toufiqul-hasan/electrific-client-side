import React from "react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

const UserInfo = ({ userInfo, reload, setReload }) => {
  const { _id, education, location, phone, social } = userInfo;

  const submit = () => {
    confirmAlert({
      title: "Do you really want to update your profile?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleUpdateInfo(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleUpdateInfo = () => {
    const url = `https://stormy-taiga-16041.herokuapp.com/user-info/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
      });
    toast(
      "Info has been deleted successfully! To update profile please use UPDATE PROFILE form."
    );
  };
  return (
    <div>
      <p>Education: {education}</p>
      <p>Location: {location}</p>
      <p>Phone: {phone}</p>
      <p>Social Link: {social}</p>
      <div className="flex justify-center mt-5">
        <button className="btn btn-primary text-white" onClick={() => submit()}>
          Update Info
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
