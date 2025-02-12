import { Chance } from "chance";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../redux/slice/crudOperationSlice";

function UserDetails() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const chance = Chance();
  const fackUserData = () => {
    console.log(chance.name({ middle: true }));
    return chance.name({ middle: true });
  };

  const addNewUser = (payload) => {
    console.log("fackUserData", fackUserData());
    const fakeData = fackUserData();
    console.log(chance.name({ suffix: true }));
    console.log("payload", payload);
    dispatch(addUserData(fakeData));
  };

  return (
    <>
      <div>
        UserDetails
        <button onClick={() => addNewUser()}>Add data</button>
      </div>
    </>
  );
}

export default UserDetails;
