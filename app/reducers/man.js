import * as types from '../actions/types';

const manReducer = (state = 0, action) => {
    switch (action.type) {
        case types.STEP:
            return (state + 1) % 7;
        default:
            return state;
    }
};

export default manReducer;
