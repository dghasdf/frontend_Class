import { promises } from "dns";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  console.log(q);
  console.log(searchParams);
  return <div>search 페이지: {q}</div>;
};

export default Page;
