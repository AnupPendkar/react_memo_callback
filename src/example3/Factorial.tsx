import React from "react";

const Factorial = ({ getFactorialVal }: { getFactorialVal: () => number }) => {
  return (
    <>
      <span>{getFactorialVal()}</span>
    </>
  );
};

export default React.memo(Factorial);
