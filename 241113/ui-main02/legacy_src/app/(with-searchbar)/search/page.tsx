// import React from "react";
// import { BookData } from "../../../../src/types";
// import BookItem from "../../../../src/components/book-item";

// const Page = async ({
//   searchParams,
// }: {
//   searchParams: Promise<{ q: string }>;
// }) => {
//   const { q } = await searchParams;
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/
//   book/search?q=${q}`);
//   if (!response.ok) {
//     return <div>오류가 발생했습니다...</div>;
//   }

//   const books: BookData[] = await response.json();
//   console.log(books);
//   return (
//     <div>
//       {books.map((book) => (
//         <BookItem {...book} />
//       ))}
//     </div>
//   );
// };

// export default Page;
