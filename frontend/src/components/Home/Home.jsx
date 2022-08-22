import React, { useEffect } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import Comment from "../Comment/Comment";
import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-3">
            1 of 2
            <RelatedVideos
              listRelatedVideos={props.listRelatedVideos}
              setVideoId={props.setVideoId}
              videoId={props.videoId}
            />
          </Col>
          <Col md={9}>
            2 of 2
            <VideoPlayer videoId={props.videoId} />
            <CommentForm
              user={props.user}
              videoId={props.videoId}
              setUser={props.setUser}
            />
            <Comment
              user={props.user}
              videoId={props.videoId}
              storedUserName={props.storedUserName}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
