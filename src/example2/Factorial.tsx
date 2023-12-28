import React from "react";

const Factorial = () => {
  const [factorialNo, setFactorialNo] = React.useState(1);

  const calculateFactorial = () => {
    console.log("factorial calculating");
    let total = 1;
    let no = factorialNo;

    while (no > 1) {
      total = total * no;
      no--;
    }

    return total;
  };

  return (
    <>
      <button
        style={{ margin: "0 30px" }}
        onClick={() => setFactorialNo((prev) => prev + 1)}
      >
        +
      </button>

      <span>{calculateFactorial()}</span>
    </>
  );
};

export default React.memo(Factorial);
