import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const SearchBar = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(props.search);
    props.getVideo();
    props.setSearch("");
  }

  return (
    <Form className="d-flex center" onSubmit={handleSubmit}>
      <FormControl
        className="me-2"
        type="search"
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
