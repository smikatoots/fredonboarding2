import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

const Man = ({ stepNumber }) => {
    return (
        <div>
            <p>{stepNumber}</p>
            <img src={imgUrls[stepNumber]}/>
        </div>
    );
};

Man.propTypes = {
    stepNumber: PropTypes.number
};

export default Man;
