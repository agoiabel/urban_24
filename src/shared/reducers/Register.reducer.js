import { updateObject } from '../update_object';
import { REGISTER } from '../constants/Register.constant';

const create = (state, action) => {
    return updateObject(state, {
        user: (action.payload.status === 200) ? action.payload.data : state.user,
        message: action.payload.message,
        status: action.payload.status,
    });
}

const initialState = {
    message: null,
    status: null,
    user: null,
};

const reducer = (state = initialState, action) => {
    const lookup = {
        [REGISTER.CREATE_SUCCESSFUL]: create,
        [REGISTER.CREATE_UNSUCCESSFUL]: create
    }
    return lookup[action.type] ? lookup[action.type](state, action) : state;
}

export default reducer;