import React, { ReactNode } from "react";
// import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
// import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fethchBooks from "@/lib/fetch-book";
import { Infer } from "next/dist/compiled/superstruct";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const books = await fethchBooks(q as string);
  return {
    props: { books },
  };
};

const Page = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};
Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
