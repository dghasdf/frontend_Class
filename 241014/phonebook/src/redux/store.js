import { createStore } from "redux";
import reducer from "./Reduxcer";

let store = createStore(reducer);

export default store;
