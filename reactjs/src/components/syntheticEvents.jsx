import React, { Component } from "react";

function SyntheticEvent() {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Click Aswin</button>
    </div>
  );
}

export default SyntheticEvent;
