import { TABLE } from './Table.constant';
import { updateObject } from '../../shared/update_object';

const create = (state, action) => {
    return updateObject(state, {
        values: (action.payload.status === 200) ? action.payload.data : state.values,
        message: `${action.payload.message} - ${Date.now()}`,
        status: action.payload.status,
    });
}

const initialState = {
    message: null,
    status: null,
    values: null,
};

const reducer = (state = initialState, action) => {
    const lookup = {
        [TABLE.GET_SUCCESSFUL]: create,
        [TABLE.GET_UNSUCCESSFUL]: create,

        [TABLE.MULTIPLE_ACTION_EXECUTED_SUCCESSFUL]: create,
        [TABLE.MULTIPLE_ACTION_EXECUTED_UNSUCCESSFUL]: create,
    }
    return lookup[action.type] ? lookup[action.type](state, action) : state;
}

export default reducer;