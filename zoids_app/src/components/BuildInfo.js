import React from 'react';
import PropTypes, { string } from "prop-types";
import {TableContainer, Table, TableBody, TableRow, TableCell} from '@mui/material';

const BuldInfo = ({build_info}) => (
    <div>
        <h3>Bulid Info</h3>
        <TableContainer>
            <Table>
                <TableBody>
                {Object.keys(build_info)
                    .map((key) => (
                        <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>
                            {key === "parts" ? build_info[key].join(", ") : build_info[key]}
                        </TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
);

BuldInfo.propTypes = {
    build_info: PropTypes.shape({
        "base zoid": PropTypes.string.isRequired,
        parts: PropTypes.arrayOf(string).isRequired,
        cost: PropTypes.string.isRequired
    })
};

export default BuldInfo;
