import React, { useState } from "react";

const CountList = (props) => {
  const deleteTodo = (id) => {
    props.deleteHandler(id);
  };
  const handleIncrement = () => {
    props.handleIncrement();
  };

  console.log(props);
  return (
    <div>
      <div key={props.id}>
        <button onClick={() => deleteTodo(props.counters.id)}>delete</button>
        {props.counters.value}

        <button onClick={() => props.onIncrement(props.counters)}>+</button>
      </div>
    </div>
  );
};

export default CountList;
