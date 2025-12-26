import { useState, useEffect } from "react";
import axios from "axios";
import UserProfilePresenter from "./UserProfilePresenter";
import "../index.css";

const UserProfileContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/users/${userId}`
      );
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      setError("Failed to fetch user data", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/users/${userId}/posts`
      );
      setPosts(response.data);
    } catch (error) {
      setError("Failed to fetch user posts", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchUserData();
  };
  return (
    <UserProfilePresenter
      user={user}
      posts={posts}
      loading={loading}
      error={error}
      onRetry={handleRetry}
    />
  );
};

export default UserProfileContainer;
