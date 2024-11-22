// 예제 파일
// react에서 data-fetching 하는 과정

import { useState, useEffect } from "react";

const Page = () => {
  const [state, setState] = useState("");
  const fetchgData = async () => {
    const response = await fetch("...");
    const data = await response.json();

    setState(data);
  };
  useEffect(() => {
    fetchgData();
  }, []);
  return <div>{state}</div>;
};

export default Page;
