import * as types from './types';

// Board actions
export function start(answer) {
    return {
        type: types.START,
        answer
    };
}

export function guess(inputText) {
    return {
        type: types.GUESS,
        inputText
    };
}
