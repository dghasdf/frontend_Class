import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  const [search, seStart] = useState("");
  const onchangeSEarch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().include(search.toLowerCase)
        );
  };
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {/* {todo.map((it) => {
          <todoItem key={it.id} {...it} />;
        })} */}
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
