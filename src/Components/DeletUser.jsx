import React from "react";
import { useDispatch } from "react-redux";
import { deletUser } from "../ExtraReducer/ExtraReducer";

function DeletUser() {
  const dispatch = useDispatch();

  const ClearUser = () => {
    dispatch(deletUser());
  };
  return (
    <div>
      <button onClick={ClearUser}> Clear All Data</button>
    </div>
  );
}

export default DeletUser;
