import "./App.css";
import Login from "./Componrnts/Login";
import SignUp from "./Componrnts/SignUp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
