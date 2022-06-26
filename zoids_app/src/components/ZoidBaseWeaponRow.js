import React from 'react';
import PropTypes from "prop-types";
import { TableRow, TableCell } from '@mui/material';

const ZoidBaseWeaponRow = ({base_weapons}) => (
        <TableRow>
            <TableCell>{base_weapons.name}</TableCell>
            <TableCell>{base_weapons.AT}</TableCell>
            <TableCell>{base_weapons.TG}</TableCell>
            <TableCell>{base_weapons.EP}</TableCell>
        </TableRow>
)

ZoidBaseWeaponRow.propType = {
    base_weapons: PropTypes.shape({
        name: PropTypes.string.isRequired,
        TG: PropTypes.string.isRequired,
        EP: PropTypes.string.isRequired
    })
}

export default ZoidBaseWeaponRow;