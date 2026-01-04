import { useReducer } from "react";
import { toogleReducer } from "./toogle-reducer";

const Toogle = ({ reducer = toogleReducer }) => {
  const [state, dispatch] = useReducer(reducer, { on: false, clicks: 0 });
  const { on, clicks } = state;

  const handleClick = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <button onClick={handleClick}>
      {on ? "ON" : "OFF"} (Clicks: {clicks})
    </button>
  );
};

export default Toogle;
