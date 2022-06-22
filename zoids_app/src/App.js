import React from 'react';
import './App.css';

import zoids from "./zoids.json";

function App() {
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: "1rem",
    }}>
        <h1 className="title"> Zoids Wiki</h1>
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Type </th>
              <th> Height </th>
              <th> Length </th>
              <th> Weight </th>
              <th> Max Speed </th>
              <th> Weapons </th>
              <th> Equipment </th>
            </tr>
          </thead>
          <tbody>
            {zoids.map((zoids) => (
              <tr>
                <td>{zoids.name}</td>
                <td>{zoids.type}</td>
                <td>{zoids.height}</td>
                <td>{zoids.length}</td>
                <td>{zoids.weight}</td>
                <td>{zoids.max_speed}</td>
                <td>{zoids.weapons.join(", ")}</td>
                <td>{zoids.equipment.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
