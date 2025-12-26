import { useState } from "react";
import ErrorPresenterCommon from "./ErrorPresenterCommon";
import LoadingPresenterCommon from "./LoadingPresenterCommon";
import ProfileHeaderPresenter from "./ProfileHeaderPresenter";
import PostListPresenter from "./PostListPresenter";

const UserProfilePresenter = ({
  user,
  posts,
  loading,
  error,
  onRetry,
  onUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    console.log("Update Result:", result);
  };

  const handleCancelEditing = () => {
    setIsEditing(false);
    setFormData({
      name: user.name,
      email: user.email,
      bio: user.bio,
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  if (loading) {
    return <LoadingPresenterCommon message="Loading user profile..." />;
  }

  if (error) {
    return <ErrorPresenterCommon message={error} onRetry={onRetry} />;
  }

  return (
    <div className="user-profile">
      <ProfileHeaderPresenter
        user={user}
        isEditing={isEditing}
        formData={formData}
        onStartEditing={() => setIsEditing(true)}
        onInputChange={handleInputChange}
        onCancelEditing={handleCancelEditing}
        onSaveProfile={handleSaveProfile}
      />
      <PostListPresenter posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;
