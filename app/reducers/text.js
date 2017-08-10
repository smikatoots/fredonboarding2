import * as types from '../actions/types';

const getNewCurrentState = (guess, currentText, answer) => {
    const nextText = [ ...currentText ];
    answer.forEach((item, idx) => {
        if (item === guess) {
            nextText[idx] = guess;
        } else {
            nextText[idx] = null;
        }
    });
    currentText.forEach((item, idx) => {
        if(currentText[idx] !== null) {
            nextText[idx] = currentText[idx];
        }
    });
    return { currentText: nextText };
};

const applyGuess = (guess, state) => {
    if (state.answer.indexOf(guess) === -1) {
        return Object.assign({}, state, {step: (state.step + 1) % 7});
    }
    return Object.assign(
        {},
        state,
        getNewCurrentState(guess, state.currentText, state.answer)
    );
};

const initialState = {answer: ['A', 'B', 'C'], currentText: [], step: 0};

const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GUESS:
            return applyGuess(action.inputText.toUpperCase(), state);
        case types.START:
            return Object.assign({}, {answer: action.answer.split('')});
        default:
            return state;
    }
};

export default textReducer;
