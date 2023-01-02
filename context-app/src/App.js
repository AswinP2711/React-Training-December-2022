import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <div>
      <UserProvider value="Aswin">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
