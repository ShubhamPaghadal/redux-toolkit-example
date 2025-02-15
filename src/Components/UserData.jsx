import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../Slice/Userslice";

function UserData() {
  const dispatch = useDispatch();
  const DisplayData = useSelector((state) => state.user?.userList);
  console.log(DisplayData);

  const deletData = (index) => {
    dispatch(removeUser(index)); // Pass index instead of id
  };

  return (
    <div>
      <br></br>
      Below is User Data List
      {DisplayData?.length > 0 &&
        DisplayData?.map((userData, index) => {
          return (
            <li key={index}>
              {userData}
              <button onClick={() => deletData(index)}>Delete</button>{" "}
              {/* Pass index */}
            </li>
          );
        })}
    </div>
  );
}

export default UserData;
