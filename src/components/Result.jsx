import React from "react";

const Result = ({ location }) => {
  if (!location || !location.state) {
    return (
      <div>
        Result:
        <h1>No data available</h1>
      </div>
    );
  }
  const { state, city } = location.state;
  console.log(state)
  console.log(city)
  return (
    <div>
      Result:
      <h1>{`Your are Selected ${state} and  ${city}`}</h1>
    </div>
  );
};

export default Result;
