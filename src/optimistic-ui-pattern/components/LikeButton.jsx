import { useState, useOptimistic, startTransition } from "react";
import "../index.css";

const sendLikeToServer = async (postId) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(`Like for post ${postId} sent to server.`);
  return { success: true };
};

const LikeButton = ({ postId, initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);

  const [optimisticLike, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, delta) => currentLikes + delta
  );

  const handleClick = async () => {
    addOptimisticLike(1);

    try {
      await sendLikeToServer(postId);
      setLikes((prevLikes) => prevLikes + 1);
    } catch (error) {
      console.error("Failed to send like to server:", error);
    }
  };
  return (
    <div className="center">
      <h1 className="h1">❤️ {optimisticLike}</h1>
      <button onClick={() => startTransition(async () => handleClick())}>
        Add Like
      </button>
    </div>
  );
};

export default LikeButton;
