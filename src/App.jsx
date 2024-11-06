import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import './App.css'

function App() {
  const [starships, setStarships] = useState([]); 

  useEffect(() => {
    async function getData(){
      let data = await getAllStarships()
      setStarships(data); 
    }
      getData();
    }, [])

  return (
    <>
      <header>STAR WARS STARSHIPS</header>
      <div className="starships-list">
        {starships.length > 0 ? ( starships.map((starship, index) => (
            <div className="card" key={index}>
              <h3>{starship.name}</h3>
            </div>))) : (<p>Loading...</p>)}
      </div>
    </>
  );
}

export default App
