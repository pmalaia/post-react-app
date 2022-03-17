import React from "react";
import CommonButton from "./UI/button/CommonButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <CommonButton onClick={() => props.remove(props.post)} >Удалить</CommonButton>
      </div>
    </div>
  );
};

export default PostItem;
