import React from 'react';
import PropTypes from "prop-types";

const ZoidBaseWeaponRow = ({base_weapons}) => (
        <tr>
            <td>{base_weapons.name}</td>
            <td>{base_weapons.AT}</td>
            <td>{base_weapons.TG}</td>
            <td>{base_weapons.EP}</td>
        </tr>
)

ZoidBaseWeaponRow.propType = {
    base_weapons: PropTypes.shape({
        name: PropTypes.string.isRequired,
        TG: PropTypes.string.isRequired,
        EP: PropTypes.string.isRequired
    })
}

export default ZoidBaseWeaponRow;