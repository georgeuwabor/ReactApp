import "./App.css";
import AgeComponent from "./Componentss/Age";
import AgeNumber from "./Componentss/Number";

const App = () => {
  const calPrompt = () => {
    let age = prompt("How old are you?");
    return age;
  };
  let x = calPrompt();
  return (
    <>
      <AgeComponent shalom={x} />
      <AgeNumber george={x} />
    </>
  );
};

export default App;
