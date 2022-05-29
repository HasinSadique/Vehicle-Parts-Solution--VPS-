import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://vehicle-parts-solution.herokuapp.com/get-all-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleMakeAdminClick = (email) => {
    fetch(`https://vehicle-parts-solution.herokuapp.com/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(equipment),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-full">
      <div class="overflow-x-auto">
        <table class="w-full  table table-zebra w-full">
          {/* <!-- head --> */}
          <thead className=" ">
            <tr className="mx-auto">
              <th></th>
              <th>User Email</th>
              <th>User Type</th>
              <th>Switch User Type</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.userEmail}</td>
                <td>{user.userRole}</td>
                <td className="">
                  {user.userRole == "Customer" ? (
                    <button
                      onClick={() => handleMakeAdminClick(user.userEmail)}
                      className="btn hover:bg-orange-600 "
                    >
                      Make Admin
                    </button>
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            ))}

            {/* <!-- row 2 --> */}
            {/* <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr> */}
            {/* <!-- row 3 --> */}
            {/* <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllUsers;
