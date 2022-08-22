import React, { Component, useState, useEffect } from "react";
import axios from "axios";

const Reply = (props) => {
  const [replies, setReplies] = useState([]);

  async function getCommentReplies(commentId) {
    const jwt = localStorage.getItem("token");
    let response = await axios.get(
      `http://127.0.0.1:8000/replies/${commentId}/`,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    setReplies(response.data);
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getCommentReplies(props.commentId);
      console.log("Reply mounted test: successful!");
    }
    return () => (mounted = false);
  }, [props.videoId]);

  return (
    <div>
      {replies.map((reply, index) => {
        if (reply.comment_id === props.commentId) {
          return (
            <div>
              <div className="username">{reply.user.username}</div>
              <span className="reply-text">{reply.text}</span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Reply;
