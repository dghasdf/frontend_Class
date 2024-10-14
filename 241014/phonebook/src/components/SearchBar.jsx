import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [keyword, setkeyword] = useState("");
  const dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefult();
    dispatch({ type: "SEARCH", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={11}>
          <Form.Control
            type="text"
            placeholder="SearchName"
            onChange={(e) => setkeyword(e.target.value)}
          />
        </Col>
        <Col lg={1}>
          <Button type="submit">Search</Button>
        </Col>
        {/* 리액트는 그리드 총값이 12가 되어야한다. */}
      </Row>
    </Form>
  );
};

export default SearchBar;
