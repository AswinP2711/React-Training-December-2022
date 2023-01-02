import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import { Fragment } from "react";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
import UncontrolledComponents from "./components/UncontrolledComponent";

function App() {
  return (
    <div className="App">
      <ClickCounter name='Aswin'/>
      <HoverCounter/>
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <ClickCounterTwo/> 
      <HoverCounterTwo/>
      <User render={(isLoggendIn)=>isLoggendIn?'Aswin':'Guest'}/>  */}
      {/* <Counter render={(count,incrementCount)=>
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      }/>
      <Counter render={(count,incrementCount)=>
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      }/> */}
      {/* <UncontrolledComponents/> */}
    </div>
  );
}

export default App;
