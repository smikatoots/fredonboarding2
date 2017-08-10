import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { guess } from '../actions';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ stepNumber, currentState, onInput }) => {
    let input;
    return (
        <div>
            <Man stepNumber={stepNumber} />
            <Board currentState={currentState} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => { onInput(input.value); alert(input.value); } }
            />
        </div>
    );
};

GameContainer.propTypes = {
    stepNumber: PropTypes.number,
    currentState: PropTypes.array,
    onInput: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        stepNumber: state.textReducer.step,
        currentState: state.textReducer.currentText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInput: (inputText) => dispatch(guess(inputText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
