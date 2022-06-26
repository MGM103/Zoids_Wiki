import React, {useState, useEffect} from 'react';
import './App.css';

// components
import WikiRow from './components/WikiRow';
import ZoidInfo from './components/ZoidInfo'

function App() {
  const [zoids, setZoids] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedZoid, setSelectedZoid] = useState(null);

  useEffect(() => {
    console.log("Ran use Effect")

    fetch("http://localhost:3000/Zoids_Wiki/zoids.json")
      .then((response) => response.json())
      .then((data) => setZoids(data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: "1rem",
    }}>
        <h1 className="title"> Zoids Wiki</h1>
        <div style={{
          display: 'grid',
          gridColumnGap: "1rem"
        }}>
          <div>
            <input 
              value={search}
              onChange={(evnt) => setSearch(evnt.target.value)}
            />
            <table width="100%">
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Type </th>
                  <th> Manufacturer </th>
                  <th> Description </th>
                </tr>
              </thead>
              <tbody>
                {zoids
                  .filter((zoids) => zoids.name.toLowerCase().includes(search.toLowerCase()))
                  .map((zoids) => (
                    <WikiRow zoids={zoids} key={zoids.id} onSelect={() => setSelectedZoid(zoids)} />
                  ))
                }
              </tbody>
            </table>
          </div>
          {selectedZoid && <ZoidInfo {...selectedZoid} />}
        </div>
    </div>
  );
}

export default App;
