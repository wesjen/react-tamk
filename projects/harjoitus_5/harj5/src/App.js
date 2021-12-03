import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getBirds = async () => {
      let tasksFromServer = await fetchBirds();
      console.log(tasksFromServer);
    };

    getBirds();
  }, []);

  // Fetch Tasks
  const fetchBirds = async () => {
    const res = await fetch("http://localhost:3010/birds");
    const data = await res.json();

    return data;
  };

  return <div className="App"></div>;
}

export default App;
