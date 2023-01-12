import "./App.css";
import AgeComponent from "./Componentss/Age";
import AgeNumber from "./Componentss/Number";
import ListName from "./Componentss/ListUsers/Listname";
import Task from "./Componentss/Task11/Task1";
import { useState } from "react";

const App = () => {
  let List = [
    { name: "shalom", age: 23 },
    { name: "tom", age: 50 },
    { name: "george", age: 1000 },
    { name: "mike", age: 150 },
  ];

  const [count, setCount] = useState(0); // useState() syntax
  const minusCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const resetButton = () => {
    setCount(0);
  };

  return (
    <>
      <AgeComponent shalom={List} />
      {/* <AgeNumber george={List} /> */}
      <ListName nn={List} />

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button id="gg" onClick={minusCount}>
        Minus Count
      </button>
      <button onClick={resetButton}>Reset</button>
      <Task />
    </>
  );
};

export default App;
