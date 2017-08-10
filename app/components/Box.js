import React from 'react';
import PropTypes from 'prop-types';
const inlineStyle = (letter) => ({
    'border': 'solid',
    'width': '50px',
    'height': '50px',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'backgroundColor': letter === null ? 'red' : 'yellow'
});
const Box = ({ letter }) => {
    return (
        <div style={inlineStyle(letter)}>
            {letter === null ? '' : letter.toUpperCase()}
        </div>
    );
};

Box.propTypes = {
    letter: PropTypes.string
};

export default Box;
