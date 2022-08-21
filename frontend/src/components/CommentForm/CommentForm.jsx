import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./CommentForm.css";
import jwt_decode from "jwt-decode";

const CommentForm = (props) => {
  const [commentText, setCommentText] = useState("");
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  async function createComment(commentInfo) {
    const jwt = localStorage.getItem("token");
    let response = await axios.post(
      "http://127.0.0.1:8000/comment/create/",
      commentInfo,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    console.log("createComment response", response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      video_id: props.videoId,
      text: commentText,
      likes: like,
      dislikes: dislike,
      user_id: props.user.user_id,
    };
    console.log("new comment", newComment);
    createComment(newComment);
    setCommentText("");
    console.log();
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="">Comment</label>
        <input
          className=""
          type="text"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        ></input>
        <button className="" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
