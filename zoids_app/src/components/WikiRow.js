import React from 'react';
import PropTypes from "prop-types";

const WikiRow = ({zoids, onSelect}) => (
    <tr>
      <td>{zoids.name}</td>
      <td>{zoids.type}</td>
      <td>{zoids.max_speed}</td>
      <td>{zoids.weapons.join(", ")}</td>
      <td>
        <button onClick={() => onSelect(zoids)}>Select</button>
      </td>
    </tr>
  );
  
  WikiRow.propTypes = {
    zoids: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      max_speed: PropTypes.string.isRequired,
      weapons: PropTypes.arrayOf(PropTypes.string.isRequired),
    }),
    onSelect: PropTypes.func.isRequired
  };

  export default WikiRow;