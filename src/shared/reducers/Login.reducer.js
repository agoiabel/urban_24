import { updateObject } from '../update_object';
import { LOGIN } from '../constants/Login.constant';

const create = (state, action) => {
    return updateObject(state, {
        user: (action.payload.status === 200) ? action.payload.data : state.user,
        message: `${action.payload.message} - ${Date.now()}`,
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
        [LOGIN.CREATE_SUCCESSFUL]: create,
        [LOGIN.CREATE_UNSUCCESSFUL]: create
    }
    return lookup[action.type] ? lookup[action.type](state, action) : state;
}

export default reducer;