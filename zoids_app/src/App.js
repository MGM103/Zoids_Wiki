import React, {useState} from 'react';

import './App.css';
import zoids from "./zoids.json";

// components
import WikiRow from './components/WikiRow';
import ZoidInfo from './components/ZoidInfo'

function App() {
  const [search, setSearch] = useState("");
  const [selectedZoid, setSelectedZoid] = useState(null);

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
                  <th> Max Speed </th>
                  <th> Weapons </th>
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
