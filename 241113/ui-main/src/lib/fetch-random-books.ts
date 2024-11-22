import { BookData } from "@/types";
import { promises } from "dns";

const fetchRandomBooks = async (): Promise<BookData[]> => {
  const url = "http://localhost:12345/book/random";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default fetchRandomBooks;
