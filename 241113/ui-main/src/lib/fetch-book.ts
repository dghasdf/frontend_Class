import { BookData } from "@/types";

const fethchBooks = async (q?: string): Promise<BookData[]> => {
  let url = "http://localhost:12345/book";
  if (q) {
    url += `/search?q=${q}`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default fethchBooks;
