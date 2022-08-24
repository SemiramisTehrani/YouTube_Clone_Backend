import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import Reply from "../Reply/Reply";
import Card from "react-bootstrap";
import "./Comment.css";

const Comment = (props) => {
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState(comments.likes);
  const [dislike, setDislike] = useState(comments.dislikes);
  const [onReplyClick, setOnReplyClick] = useState(false);
  const [commentId, setCommentId] = useState(0);

  function handleClick(comment) {
    setOnReplyClick(!onReplyClick);
    setCommentId(comment.id);
  }

  async function getVideoComment(videoId) {
    let response = await axios.get(
      `http://127.0.0.1:8000/comments/${videoId}/`
    );
    setComments(response.data);
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getVideoComment(props.videoId);
      console.log("mounted test");
    }
    return () => (mounted = false);
  }, [props.videoId]);

  return (
    <div className="comment">
      {comments.map((comment, index) => {
        if (comment.video_id) {
          return (
            <div>
              <div className="username">{comment.user.username}</div>
              <span className="comment-text">{comment.text}</span>
              <div>
                <p>{comment.likes} Likes</p>
                <p>{comment.dislikes} Dislikes</p>
              </div>
              <button
                className="button"
                type="button"
                onClick={() => handleClick(comment)}
              >
                Reply
              </button>
              {}
              <Reply commentId={commentId} videoId={props.videoId} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Comment;