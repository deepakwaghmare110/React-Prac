import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h2>Oops..</h2>
      <h1>Something went wrong...</h1>
      <p>{err.status}</p>
      <p>{err.statusText}</p>
    </div>
  );
};

export default Error;
