const ProfileHeaderPresenter = ({
  user,
  isEditing,
  formData,
  onStartEditing,
  onInputChange,
  onCancelEditing,
  onSaveProfile,
}) => {
  return (
    <div className="profile-header">
      <img src={user.avatar} alt={user.name} className="avatar" />
      {!isEditing ? (
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <button onClick={onStartEditing} className="edit-btn">
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="profile-form">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            placeholder="name"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            value={formData.bio}
            onChange={(e) => onInputChange("bio", e.target.value)}
            placeholder="bio"
          />
          <div className="forms-actions">
            <button onClick={onCancelEditing}>Cancel</button>
            <button onClick={onSaveProfile}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeaderPresenter;
