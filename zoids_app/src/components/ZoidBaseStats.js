import React from 'react';
import PropTypes from "prop-types";

const ZoidBaseStats = ({base_stats}) => (
    <div>
      <h3>Base Stats</h3>
      <table>
        <tbody>
          {Object.keys(base_stats)
            .map(
            (key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{base_stats[key]}</td>
                </tr>
            ))
          }
        </tbody>
      </table>
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