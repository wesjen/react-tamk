import { useEffect, useState } from "react";

function Database() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const updateBirds = async () => {
      let fetched = await fetchBirds();
      setBirds(fetched);
    };

    updateBirds();
  }, []);

  // Fetch birds
  const fetchBirds = async () => {
    let data = await fetch("http://localhost:3010/birds");
    return data.json();
  };

  // Add Bird
  // TODO: Add current timestamp
  const postNewBird = async (bird) => {
    bird.preventDefault();
    let res = await fetch("http://localhost:3010/birds", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // TODO: ERROR - Circular JSON?
      body: JSON.stringify(bird),
    });

    let jsonData = await res.json();

    setBirds([...birds, jsonData]);
  };

  // Make rows for display
  function rowMaker() {
    return birds.map((bird) => {
      return (
        <p key={Math.random()}>
          {bird.birdType} {bird.timeCaptured} {bird.location} {bird.timePosted}
        </p>
      );
    });
  }

  const keyMaker = () => Math.random();

  return (
    <div>
      <div>
        <h2>Add a bird:</h2>
        <form onSubmit={postNewBird}>
          <input type="text" name="birdType"></input>
          <input type="date" name="timeCaptured"></input>
          <input type="submit"></input>
        </form>
      </div>
      <div key={keyMaker}>
        <h2 key={keyMaker}>Captured birds:</h2>
        {rowMaker()}
      </div>
    </div>
  );
}

export default Database;
