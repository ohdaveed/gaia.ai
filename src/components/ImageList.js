import React from "react";
import { Provider, useFetch } from "use-http";

function Images() {
  // accepts all `fetch` options
  const options = {
    data: [], // setting default for `data` as array instead of undefined
  };

  const { loading, error, data } = useFetch(
    "https://example.com/todos",
    options,
    []
  ); // onMount (GET by default)

  return (
    <>
      {error && "Error!"}
      {loading && "Loading..."}

      {data.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
}

export default Images;
