const AgeNumber = (props) => {
  return (
    <>
      <h1>
        Age:{" "}
        {props.george.map((items, index) => (
          <li>{items.age}</li>
        ))}
      </h1>
    </>
  );
};

export default AgeNumber;
