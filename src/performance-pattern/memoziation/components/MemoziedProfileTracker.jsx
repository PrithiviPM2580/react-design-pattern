import { useState } from "react";
import MemoizedCard from "./ProfileTracker";

const MemoziedProfileTracker = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MemoizedCard name="Prithivi" />
    </div>
  );
};

export default MemoziedProfileTracker;
