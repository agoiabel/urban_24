import { updateObject } from '../update_object';
import { USER } from '../constants/User.constant';

const show = (state, action) => {
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
        [USER.GET_SUCCESSFUL]: show,
        [USER.GET_UNSUCCESSFUL]: show,

        [USER.UPDATE_SUCCESSFUL]: show,
        [USER.UPDATE_UNSUCCESSFUL]: show,
    }
    return lookup[action.type] ? lookup[action.type](state, action) : state;
}

export default reducer;