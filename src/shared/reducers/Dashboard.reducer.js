import { updateObject } from '../update_object';
import { FORGET_PASSWORD } from '../constants/Forgotpassword.constant';

const create = (state, action) => {
    return updateObject(state, {
        message: `${action.payload.message} - ${Date.now()}`,
        status: action.payload.status,
    });
}

const initialState = {
    message: null,
    status: null,
};

const reducer = (state = initialState, action) => {
    const lookup = {
        [FORGET_PASSWORD.CREATE_SUCCESSFUL]: create,
        [FORGET_PASSWORD.CREATE_UNSUCCESSFUL]: create
    }
    return lookup[action.type] ? lookup[action.type](state, action) : state;
}

export default reducer;