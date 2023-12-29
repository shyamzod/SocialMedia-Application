import { useContext, useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = new useContext(PostListData);

  const UserId = useRef();
  const Title = useRef();
  const Body = useRef();
  const Reactions = useRef();
  const Hashtags = useRef();

  const addPostEvent = (event) => {
    event.preventDefault();
    const hashtagslist = Hashtags.current.value.split(" ");
    const New_POST = {
      id: "4",
      title: Title.current.value,
      body: Body.current.value,
      reactions: Reactions.current.value,
      userId: UserId.current.value,
      tags: hashtagslist,
    };
    addPost(New_POST);
  };
  return (
    <>
      <div>
        <div className="createpost">
          <form onSubmit={addPostEvent}>
            <div className="mb-3">
              <label htmlFor="Idtext" className="form-label">
                Enter Your Post Id Here
              </label>
              <input
                type="text"
                className="form-control"
                id="Idtext"
                ref={UserId}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleTitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleTitle"
                ref={Title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bodyText" className="form-label">
                Body
              </label>
              <input
                type="textarea"
                className="form-control"
                id="bodyText"
                ref={Body}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reactionText" className="form-label">
                Number of Reactions
              </label>
              <input
                type="text"
                className="form-control"
                id="reactionText"
                ref={Reactions}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="hashtagText" className="form-label">
                Enter Your Hashtags
              </label>
              <input
                type="text"
                className="form-control"
                id="hashtagText"
                ref={Hashtags}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
