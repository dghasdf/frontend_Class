import React, { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import fethchBooks from "@/lib/fetch-book";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([
    fethchBooks(),
    fetchRandomBooks(),
  ]);

  // home이라는 페이지 컴포넌트가 실행되기 전에 먼저 실행되어서, 컴포넌트에 필요한 데이터를 사전에 fetching 및 불러와주는 기능

  // window.location;
  // console.log("서버사이드 프롭스!");

  return {
    props: { allBooks, recoBooks },
  };
};

const Home = ({
  allBooks,
  recoBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
