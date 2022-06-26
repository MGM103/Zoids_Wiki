import React from 'react';
import PropTypes from "prop-types";
import {Button} from '@mui/material';

const WikiRow = ({zoids, onSelect}) => (
    <tr>
      <td>{zoids.name}</td>
      <td>{zoids.type}</td>
      <td>{zoids.manufacturer}</td>
      <td>{zoids.description}</td>
      <td>
        <Button variant="outlined" onClick={() => onSelect(zoids)}>Select</Button>
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