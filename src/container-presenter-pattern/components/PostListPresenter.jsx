import React from "react";

const PostListPresenter = ({ posts }) => {
  return (
    <div className="user-posts">
      <h2>Recent Posts ({posts.length})</h2>
      {posts.length === 0 ? (
        <div>No posts available.</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>
                {post.content
                  ? post.content.substring(0, 150)
                  : "No content available"}
                ...
              </p>
              <span className="post-date">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostListPresenter;
