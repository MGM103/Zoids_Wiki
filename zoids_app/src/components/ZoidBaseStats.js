import React from 'react';
import PropTypes from "prop-types";
import { TableContainer, Table, TableBody, TableRow, TableCell} from '@mui/material';

const ZoidBaseStats = ({base_stats}) => (
    <div>
      <h3>Base Stats</h3>
      <TableContainer sx={{paddingTop: 0.5}}>
        <Table>
          <TableBody>
            {Object.keys(base_stats)
              .map(
              (key) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{base_stats[key]}</TableCell>
                  </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
);

ZoidBaseStats.propType = {
    base_stats: PropTypes.shape({
        HP: PropTypes.number.isRequired,
        EP: PropTypes.number.isRequired,
        GEP: PropTypes.number.isRequired,
        SP: PropTypes.number.isRequired,
        MM: PropTypes.number.isRequired,
        IV: PropTypes.number.isRequired,
        DF: PropTypes.number.isRequired,
        AM: PropTypes.number.isRequired,
        DCP: PropTypes.number.isRequired,
        SR: PropTypes.number.isRequired,
        CLV: PropTypes.number.isRequired,
        TP: PropTypes.number.isRequired,
        CP: PropTypes.number.isRequired
    })
}

export default ZoidBaseStats;