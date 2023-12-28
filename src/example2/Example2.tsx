import React from "react";
import Timer from "./Timer";
import Factorial from "./Factorial";

const Example2 = () => {
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <>
      <Timer timer={timer} />
      <Factorial />
    </>
  );
};

export default Example2;
