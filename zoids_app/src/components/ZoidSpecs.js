import React from 'react';
import PropTypes from "prop-types";

const ZoidSpecs = ({specs}) => (
    <div>
        <h3>Specs</h3>
        <table>
            <tbody>
                {Object.keys(specs)
                .map(
                    (key) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{specs[key]}</td>
                    </tr>
                    )
                )}
            </tbody>
        </table>
    </div>
);

ZoidSpecs.propTypes = {
    specs: PropTypes.shape({
        size: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired,
        max_speed: PropTypes.string.isRequired
    })
}

export default ZoidSpecs;