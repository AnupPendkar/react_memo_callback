import React from "react";

const Example1 = () => {
  const [factorialNo, setFactorialNo] = React.useState(1);
  const [timer, setTimer] = React.useState(0);

  const calculateFactorial = React.useMemo(() => {
    console.log("factorial calculating");
    let total = 1;
    let no = factorialNo;

    while (no > 1) {
      total = total * no;
      no--;
    }

    return total;
  }, [factorialNo]);

  React.useMemo(() => {}, []);

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <>
      <span>{timer}</span>

      <button
        style={{ margin: "0 30px" }}
        onClick={() => setFactorialNo((prev) => prev + 1)}
      >
        +
      </button>

      <span>{calculateFactorial}</span>
    </>
  );
};

export default Example1;
