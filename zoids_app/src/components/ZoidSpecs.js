import React from 'react';
import PropTypes from "prop-types";
import {TableContainer, Table, TableBody, TableRow, TableCell} from '@mui/material';

const ZoidSpecs = ({specs}) => (
    <div>
        <h3>Specs</h3>
        <TableContainer>
            <Table>
                <TableBody>
                {Object.keys(specs)
                .map(
                    (key) => (
                    <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{specs[key]}</TableCell>
                    </TableRow>
                    )
                )}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
);

ZoidSpecs.propTypes = {
    specs: PropTypes.shape({
        size: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired,
        "max speed": PropTypes.string.isRequired
    })
}

export default ZoidSpecs;