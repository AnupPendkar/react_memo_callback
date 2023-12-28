import React from "react";
import Factorial from "./Factorial";
import Timer from "./Timer";

const Example3 = () => {
  const [factorialNo, setFactorialNo] = React.useState(1);
  const [timer, setTimer] = React.useState(0);

  const getFactorialVal = React.useCallback(() => {
    console.log("factorial calculating");
    let total = 1;
    let no = factorialNo;

    while (no > 1) {
      total = total * no;
      no--;
    }

    return total;
  }, [factorialNo]);

  //   const getFactorialVal = React.useMemo(() => {
  //     return () => {
  //       console.log("factorial calculating");
  //       let total = 1;
  //       let no = factorialNo;

  //       while (no > 1) {
  //         total = total * no;
  //         no--;
  //       }

  //       return total;
  //     };
  //   }, []);

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <>
      <Timer timer={timer} />
      <button
        style={{ margin: "0 30px" }}
        onClick={() => setFactorialNo((prev) => prev + 1)}
      >
        +
      </button>
      <Factorial getFactorialVal={getFactorialVal} />
    </>
  );
};

export default Example3;
