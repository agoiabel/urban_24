import { USER } from '../constants/User.constant';

export const userGet = payload => ({
    type: USER.GET,
    payload
});
export const userGetSuccessful = payload => ({
    type: USER.GET_SUCCESSFUL,
    payload
});
export const userGetUnsuccessful = payload => ({
    type: USER.GET_UNSUCCESSFUL,
    payload
});


export const userUpdate = payload => ({
    type: USER.UPDATE,
    payload
});
export const userUpdateSuccessful = payload => ({
    type: USER.UPDATE_SUCCESSFUL,
    payload
});
export const userUpdateUnsuccessful = payload => ({
    type: USER.UPDATE_UNSUCCESSFUL,
    payload
});