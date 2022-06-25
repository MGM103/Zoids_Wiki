import React from 'react';
import PropTypes from "prop-types";

const ZoidInfo = ({name, height, length, weight, max_speed, type, weapons, equipment}) => (
    <div>
      <h3>{name}</h3>
      <ul>
        <li>{type}</li>
        <li>{max_speed}</li>
        <li>{height}</li>
        <li>{length}</li>
        <li>{weight}</li>
        <li>Weapons</li>
        <ol>
          {
            weapons.map(
              weapons => <li key={weapons}>{weapons}</li>
            )
          }
        </ol>
        <li>Equipment</li>
        <ol>
          {
            equipment.map(
              equipment => <li key={equipment}> {equipment}</li>
            )
          }
        </ol>
      </ul>
    </div>
)

ZoidInfo.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  max_speed: PropTypes.string.isRequired,
  weapons: PropTypes.arrayOf(PropTypes.string.isRequired),
  equipment: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default ZoidInfo;