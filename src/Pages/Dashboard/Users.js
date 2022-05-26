import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://stormy-taiga-16041.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="text-2xl font-bold">
        <h1 className="text-center uppercase">Make Admin</h1>
      </div>
      <h2 className="text-center font-bold mb-4">
        Total Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;