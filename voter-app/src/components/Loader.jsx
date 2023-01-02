import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import LoaderContext from "./LoaderContext";

function Loader() {
  
  return (
    <div>
      <div>
        <LoaderContext.Consumer>
          {({n1, n2}) => {
            return (
              <div>
                {n1 ? (
                  <BounceLoader color="#36d7b7" />
                ) : (
                  <div>
                    <button onClick={n2}>Load</button>
                    <h3>Click the button to load</h3>
                  </div>
                )}
              </div>
            );
          }}
        </LoaderContext.Consumer>
      </div>
    </div>
  );
}

export default Loader;
