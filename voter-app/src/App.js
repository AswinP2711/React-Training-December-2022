import logo from "./logo.svg";
import "./App.css";
import VoterList from "./components/voterList";
import Loader from "./components/Loader";
import LoaderContext from "./components/LoaderContext";
import { useState } from "react";

function App() {
  const [Loading, setLoading] = useState(false);

  const WhenClicked = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div>
      <LoaderContext.Provider value={{ n1: Loading, n2: WhenClicked }}>
        <Loader />
      </LoaderContext.Provider>
      {/* <VoterList/> */}
    </div>
  );
}

export default App;
