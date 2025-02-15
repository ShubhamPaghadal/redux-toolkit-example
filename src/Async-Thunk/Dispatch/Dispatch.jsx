import { useDispatch, useSelector } from "react-redux";
import { fetchtodo } from "../Slice/Slice";

function Dispatch() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);

  if (state.todo.isLoading) {
    return <h1>Loading.......</h1>;
  }

  return (
    <div>
      <button onClick={(e) => dispatch(fetchtodo())}>Fetch Data</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
    </div>
  );
}

export default Dispatch;
