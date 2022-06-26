import React from 'react';
import PropTypes from "prop-types";

//Importing Components
import ZoidSpecs from './ZoidSpecs';
import BuldInfo from './BuildInfo';
import ZoidBaseStats from './ZoidBaseStats';
import ZoidBaseWeapons from './ZoidBaseWeaponRow';

const ZoidInfo = ({name, type, manufacturer, description, imgURL, specs, build_info, base_stats, base_weapons}) => (
    <div>
      <h2>{name}</h2>
      <img alt='' src={imgURL} />
      <h3>Overview</h3>
      <ul>
        <li>{type}</li>
        <li>{manufacturer}</li>
        <li>{description}</li>
      </ul>
      <ZoidSpecs specs={specs} />
      <BuldInfo build_info={build_info} />
      <ZoidBaseStats base_stats={base_stats} />
      <h3>Base Weapons</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Damage</th>
            <th>Target</th>
            <th>EP</th>
          </tr>
        </thead>
        <tbody>
          {base_weapons.map(base_weapons => (
            <ZoidBaseWeapons base_weapons={base_weapons} key={base_weapons.name} />
          ))}
        </tbody>
      </table>
    </div>
)

ZoidInfo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired
}

export default ZoidInfo;