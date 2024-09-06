import React from "react";
import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, createdDte }) => {
  console.log(id, isDone, content, createdDte);
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" />
      </div>
      {new Date(createdDte).toLocaleDateString()}
      <div className="title_col">할 일</div>
      <div className="date_col">{new Date().toLocaleDateString()}</div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};
