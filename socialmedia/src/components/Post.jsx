import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post-list-store";
const Post = ({ id, post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <>
      <div className="allCardsDiv">
        <div className="card post-card" style={{ width: "30 rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              {post.title}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePost(post.id)}
              >
                <MdDelete />
              </span>
            </h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map((tag) => (
              <span className="badge text-bg-primary hashtag" key={tag}>
                {tag}
              </span>
            ))}
            <div className="alert alert-success reactions" role="alert">
              This Post has been reacted by {post.reactions} people;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
