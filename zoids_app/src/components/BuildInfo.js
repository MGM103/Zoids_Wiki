import React from 'react';
import PropTypes, { string } from "prop-types";

const BuldInfo = ({build_info}) => (
    <div>
        <h3>Bulid Info</h3>
        <table>
            <tbody>
                {Object.keys(build_info)
                    .map((key) => (
                        <tr key={key}>
                        <td>{key}</td>
                        <td>
                            {key === "parts" ? build_info[key].join(", ") : build_info[key]}
                        </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
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
