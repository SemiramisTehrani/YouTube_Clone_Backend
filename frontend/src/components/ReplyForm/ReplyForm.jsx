import React, { Component } from "react";

const ReplyForm = (props) => {
  const [replyText, setReplyText] = useState("");

  async function createReply(replyInfo) {
    const jwt = localStorage.getItem("token");
    let response = await axios.post("http://127.0.0.1:8000/reply/", replyInfo, {
      headers: { Authorization: "Bearer " + jwt },
    });
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="">Reply</label>
        <input
          className=""
          type="text"
          value={replyText}
          onChange={(event) => setReplyText(event.target.value)}
        ></input>
        <button className="" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default ReplyForm;
