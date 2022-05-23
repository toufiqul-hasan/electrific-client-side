import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import axiosPrivate from "../../api/axiosPrivate";
import UserInfo from "./UserInfo";

const Profile = () => {
  const [reload, setReload] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  console.log(userInfo.length);

  const handleAddInfo = (event) => {
    event.preventDefault();
    const email = user.email;
    const name = user.displayName;
    const education = event.target.education.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const social = event.target.social.value;

    const info = { email, name, education, location, phone, social };

    fetch("http://localhost:5000/user-info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Information has been added successfully!");
        setReload(!reload);
        event.target.reset();
      });
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const email = user.email;
      const url = `http://localhost:5000/user-info?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setUserInfo(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getUserInfo();
  }, [user, navigate, reload]);
  return (
    <>
      <div className="flex justify-center">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Name: {user.displayName}</h2>
            <p>Email: {user.email}</p>
            {userInfo.map((userInfo) => (
              <UserInfo
                key={userInfo._id}
                userInfo={userInfo}
                reload={reload}
                setReload={setReload}
              ></UserInfo>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">
          <h1>Add Info</h1>
        </div>
        <div className="mt-5">
          <form onSubmit={handleAddInfo}>
            <input
              name="education"
              type="text"
              placeholder="Education"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            <input
              name="phone"
              type="text"
              placeholder="Mobile Number"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            <input
              name="social"
              type="text"
              placeholder="Social Link"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            {userInfo.length === 0 ? (
              <button className="btn btn-primary text-white">Submit</button>
            ) : (
              <button className="btn" disabled="disabled">
                Submit
              </button>
            )}
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;