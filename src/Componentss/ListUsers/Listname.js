const ListName = (props) => {
  // console.log(props);
  return (
    <>
      <ol>
        {props.nn.map((items, index) => (
          <li key={index}>{items.name}</li>
        ))}
      </ol>
    </>
  );
};

export default ListName;
