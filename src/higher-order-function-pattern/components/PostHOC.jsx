import PostList from "./PostList";
import PostAnalaytics from "./PostAnalaytics";
import withDataFetching from "./withDataFetching";

const PostListWithData = withDataFetching(PostList);
const PostAnalyticsWithData = withDataFetching(PostAnalaytics);

const PostHOC = () => {
  return (
    <div>
      <PostListWithData />
      <PostAnalyticsWithData />
    </div>
  );
};

export default PostHOC;
