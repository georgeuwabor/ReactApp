const Child = () => {
  return (
    <>
      <h1 id="child-text">Child</h1>
    </>
  );
};

const Adult = () => {
  return (
    <>
      <h1 id="adult-text">Adult</h1>
    </>
  );
};

const Old = () => {
  return (
    <>
      <h1 id="old-text">Old</h1>
    </>
  );
};

const AgeComponent = (props) => {
  let Age = props.shalom[0].age;
  return (
    <>{Age <= 10 ? <Child /> : Age > 10 && Age < 50 ? <Adult /> : <Old />}</>
  );
};

export default AgeComponent;
