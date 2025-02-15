import { Chance } from "chance";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Slice/Userslice";
import UserData from "./UserData";
import DeletUser from "../Components/DeletUser";

function UserDetails() {
  const dispatch = useDispatch();
  const chance = Chance();

  const fackUserData = () => {
    return chance.name({ middle: true });
  };

  const addNewUser = (payload) => {
    const fakeData = fackUserData();
    console.log("fakedata", fakeData);
    dispatch(addUser(fakeData));
  };

  return (
    <>
      <div>
        <button onClick={() => addNewUser()}>Click To Add New data</button>
        <UserData />
        <DeletUser />
      </div>
    </>
  );
}

export default UserDetails;
