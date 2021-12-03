import { useEffect } from "react";

function Database() {
  useEffect(() => {
    const getBirds = async () => {
      let birdies = await fetchBirds();
      console.log(birdies);
    };

    getBirds();
  }, []);

  // Fetch Tasks
  const fetchBirds = async () => {
    const res = await fetch("http://localhost:3010/birds");
    return res.json();
  };

  // TODO: MAKE TABLE ROWS AND TABLE COLUMNS FOR EACH ATTRIBUTE BIRD TYPE & DATE

  return (
    <table>
      <tbody></tbody>
    </table>
  );
}

export default Database;
