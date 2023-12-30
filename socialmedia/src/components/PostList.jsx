import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);

  const { allPosts } = useContext(PostListData);

  useEffect(() => {
    console.log("Use Effect used");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((post) => allPosts(post.posts));
  }, []);

  return (
    <>
      <div className="PostsListSection">
        <h2 style={{ marginTop: "10px", textAlign: "center" }}>Feed</h2>
        {postList.length == 0 && (
          <div style={{ textAlign: "center", margin: "100px 0px" }}>
            <h1>No Posts</h1>
            <div>
              <span class="loader"></span>
            </div>
          </div>
        )}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
