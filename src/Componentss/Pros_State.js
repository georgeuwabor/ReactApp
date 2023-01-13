const Prop = (props) => {
  return (
    <>
      <h1>Count: {props.ps}</h1>
      <button onClick={() => props.func(props.ps + 1)}>Add Count</button>
      <button id="gg" onClick={props.ps1}>
        Minus Count
      </button>
      <button onClick={props.ps2}>Reset</button>
    </>
  );
};

export default Prop;
