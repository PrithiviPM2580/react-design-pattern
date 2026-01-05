import { memo } from "react";
const MemoizedCard = memo(function ProfileTracker({ name }) {
  console.log("Profile Tracker Rendered");
  return <h3 className="profile-tracker">{name}</h3>;
});

export default MemoizedCard;
