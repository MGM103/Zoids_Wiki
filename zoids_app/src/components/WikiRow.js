import React from 'react';
import PropTypes from "prop-types";

const WikiRow = ({zoids, onSelect}) => (
    <tr>
      <td>{zoids.name}</td>
      <td>{zoids.type}</td>
      <td>{zoids.manufacturer}</td>
      <td>{zoids.description}</td>
      <td>
        <button onClick={() => onSelect(zoids)}>Select</button>
      </td>
    </tr>
  );
  
  WikiRow.propTypes = {
    zoids: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      description:  PropTypes.string.isRequired,
    }),
    onSelect: PropTypes.func.isRequired
  };

  export default WikiRow;