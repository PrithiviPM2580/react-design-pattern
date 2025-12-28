const PostList = ({ data }) => {
  return (
    <div className="post-data">
      <h2 className="h2">Posts</h2>
      <ul className="list">
        {data.map((post) => (
          <li key={post.id} className="list-item">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
