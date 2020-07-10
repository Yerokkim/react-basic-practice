import React, { useState } from "react";
import CountList from "./CountList";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [countList, setCountList] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);

  const increase = () => {
    setCount(count + 1);
  };

  // const handleReset = () => {
  //   countList.map((x) => {
  //     x.value = 0;
  //     return x;
  //   });
  // };

  const makeAsFunction = () => {
    const getClassName = count === 0 ? "redNum" : "basicNum";
    return getClassName;
  };
  const deleteHandler = (id) => {
    let list = countList.filter((x) => x.id !== id);
    setCountList(list);
  };
  const onIncrement = (counter) => {
    let counters = [...countList];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setCountList(counters);
  };
  return (
    <div>
      <button>-</button>
      <h1 className={makeAsFunction()}> {count}</h1>
      <button onClick={increase}>+</button>

      {countList.map((x) => (
        <CountList
          key={x.id}
          counters={x}
          deleteHandler={deleteHandler}
          onIncrement={onIncrement}
        />
      ))}
    </div>
  );
};

export default Counter;
