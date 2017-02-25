import { FbAction } from '../action/fb';

const INITIAL_STATE = {
    users: [],
};

interface IAction {
    type: string,
    payload?: any
}

export function fbReducer(state = INITIAL_STATE, action: IAction) {
    switch (action.type) {
        case FbAction.ADD:
            let newState = [...state.users];
            newState.push(action.payload);
            return Object.assign({}, state, {users: newState});
        case FbAction.UPDATE:
        console.info('update')
            // return Object.assign({}, state, { users: action.payload });
            return Object.assign({}, state);
        case FbAction.DEL:
        console.info('del')
            // return Object.assign({}, state, { users: action.payload });
            return Object.assign({}, state);
        default:
            return state;
    }
}