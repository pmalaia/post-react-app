import React from "react";
import CommonButton from "./UI/button/CommonButton";
import {useNavigate} from 'react-router-dom'

const PostItem = (props) => {
  const navigate  = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <CommonButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</CommonButton>
        <CommonButton onClick={() => props.remove(props.post)} >Remove</CommonButton>
      </div>
    </div>
  );
};

export default PostItem;
