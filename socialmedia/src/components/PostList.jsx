import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      <div className="PostsListSection">
        <h2 style={{ marginTop: "10px", textAlign: "center" }}>Feed</h2>
        {postList.map((post) => (
          <Post key={post.postId} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
