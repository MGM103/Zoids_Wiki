import React from 'react';
import PropTypes from "prop-types";
import './App.css';

import zoids from "./zoids.json";

const WikiRow = ({zoids}) => (
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
);

WikiRow.propTypes = {
  zoids: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    height: PropTypes.string,
    length: PropTypes.string,
    weight: PropTypes.string,
    max_speed: PropTypes.string,
    weapons: PropTypes.arrayOf(PropTypes.string),
    equipment: PropTypes.arrayOf(PropTypes.string)
  })
};

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
              <WikiRow zoids={zoids} key={zoids.id} />
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
