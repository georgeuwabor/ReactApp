import "./App.css";
import AgeComponent from "./Componentss/Age";
import AgeNumber from "./Componentss/Number";
import ListUsers from "./Componentss/ListUsers/ListUsers";
import Task from "./Componentss/Task11/Task1";
import { useState } from "react";
import Prop from "./Componentss/Pros_State";

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
      <AgeNumber george={List} />
      <ListUsers nn={List} />

      <Task />
      <Prop ps={count} ps1={minusCount} ps2={resetButton} func={setCount} />
    </>
  );
};

export default App;
