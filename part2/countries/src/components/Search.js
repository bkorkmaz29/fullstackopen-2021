import React from "react";

const Search = (props) => {
  return (
    <form>
      find countries{" "}
      <input value={props.newCheck} onChange={props.handleNameCheck} />
    </form>
  );
};

export default Search;
