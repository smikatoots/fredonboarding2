import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const Board = ({ currentState }) => {
    return (
        <div style={{'display': 'flex'}}>
            {currentState.map(letter => <Box letter={letter}/>)}
        </div>
    );
};

Board.propTypes = {
    currentState: PropTypes.array
};

export default Board;
