import { useState } from "react";
import MemoizedCard from "./ProfileTracker";
import "../index.css";

const MemoziedProfileTracker = () => {
  const [value, setValue] = useState("");
  return (
    <div className="memoized-profile-tracker">
      <input
        className="profile-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type to trigger renders"
      />
      <MemoizedCard name="Prithivi" />
    </div>
  );
};

export default MemoziedProfileTracker;
