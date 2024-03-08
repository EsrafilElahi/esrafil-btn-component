import "./App.css";
// import { Button } from "esrafil-btn-component";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button onClick={() => console.log("clicked me!")}>click me</Button>
    </>
  );
}

export default App;
