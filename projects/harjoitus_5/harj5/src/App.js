import "./App.css";
import Database from "./database";

function App() {
  return (
    <div className="App">
      <Database key={Math.random()} />
    </div>
  );
}

export default App;
