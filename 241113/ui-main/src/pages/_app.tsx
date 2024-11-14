import "@/styles/globals.css";
import { ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";

type NextPagewidthLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPagewidthLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}

// 1.메인페이지 안에 검색바를 삽입
// searchable-layout.tsx
// 2.메인페이지의 레이아웃을 관리해주는 파일 
// <GlobalLayout> 해당 컴포넌트의 자식 컴포넌트 설정
// 3.searchable-layout.tsx는 개발자가 원하는 페이지 컴포넌트에서만 출력
// - 모든 페이지 컴포넌트에서 출력x
// 4.searcble-layout.tsx 해당요소가 출력되길 원하는 페이지 컴포넌트
// index&search
