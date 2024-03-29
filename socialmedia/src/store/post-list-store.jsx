import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  allPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ALL_POSTS") {
    newPostList = action.payload.post;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...newPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const allPosts = (post) => {
    dispatchPostList({ type: "ALL_POSTS", payload: { post } });
  };
  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: { post } });
  };
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };
  return (
    <PostList.Provider value={{ postList, addPost, allPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends I am going to Hyderabad for new year.Peace Out",
    reactions: 2,
    userId: "user-g",
    tags: ["Vacation", "Hyderabad"],
  },
  {
    id: "2",
    title: "Going to Mumbai",
    body: "Hi Friends I am going to Hyderabad for new year.Peace Out",
    reactions: 15,
    userId: "user-g",
    tags: ["Vacation", "Hyderabad", "Enjoying"],
  },
  {
    id: "3",
    title: "Going to Mumbai",
    body: "Hi Friends I am going to Hyderabad for new year.Peace Out",
    reactions: 15,
    userId: "user-g",
    tags: ["Vacation", "Hyderabad", "Enjoying"],
  },
];
export default PostListProvider;
