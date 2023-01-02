import React from "react";

function FuncProps(props) {
  return (
    <div>
      <div>
        <h3>This is functional Component</h3>
      </div>

      <div>
        <h3>Hello {props.name}</h3>
      </div>
    </div>
  );
}

export default FuncProps;
