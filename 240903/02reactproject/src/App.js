// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  useEffect(() => {
    if (!didMountRef.current) didMountRef.current = true;
    else console.log("컴포넌트업데이트");
  });
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return() => {
  //     console.log("클린업")
  //     clearInterval(intervaID);
  //     }
  //   });

  // useEffect(() => {
  //   console.log("count 업데이트:", count,text);
  // }, [count, text]);

  // useEffect(() => {
  //   console.log("컴포넌트 업데이트");
  // });

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input onChange={handleChangeText} />
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
