const PostAnalaytics = ({ data }) => {
  const totalPosts = data.length;
  const averagePost =
    data.reduce((acc, post) => acc + post.body.length, 0) / totalPosts;

  return (
    <div className="post-analytic">
      <p>Total Posts: {totalPosts}</p>
      <p>Average Post Length: {averagePost.toFixed(2)}</p>
    </div>
  );
};

export default PostAnalaytics;
