import CssImg from "../../Image/img1.jpeg";

const Task = () => {
  const x = "<coder>";
  return (
    <div id="container">
      <div id="text-container">
        <h1 id="coder"> {x}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop p
        </p>
      </div>
      <div id="img-container">
        <img src={CssImg} alt="" />
      </div>
    </div>
  );
};

export default Task;
