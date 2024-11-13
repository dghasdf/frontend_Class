import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  console.log(q);
  console.log(router);
  return <h1>search: {q}</h1>;
};

export default Search;
