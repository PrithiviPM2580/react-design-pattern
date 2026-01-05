import { memo } from "react";
const MemoizedCard = memo(function ProfileTracker({ name }) {
  return <h3>{name}</h3>;
});

export default MemoizedCard;
