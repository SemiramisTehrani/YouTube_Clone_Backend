import Comment from "../Comment/Comment.jsx";

const CommentList = (props) => {
  return (
    <div className="commentList">
      <div>
        {props.comments.map((comment, i) => {
          return <Comment key={i} comment={comment} user={props.user} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
