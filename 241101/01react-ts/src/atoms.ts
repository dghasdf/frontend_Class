import { atom } from "recoil";

interface toDoState {
  [key: string]: string[];
}

export const toDoState = atom<toDoState>({
  key: "toDo",
  default: {
    Todo: ["포폴준비하기", "리액트복습하기", "자바스크립트 공부"],
    Doing: ["노드js공부하기"],
    Done: ["운동하기", "흑백요리사 시청"],
  },
});
