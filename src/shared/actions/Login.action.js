import { LOGIN } from '../constants/Login.constant';

export const loginCreate = payload => ({
    type: LOGIN.CREATE,
    payload
});
export const loginCreateSuccessful = payload => ({
    type: LOGIN.CREATE_SUCCESSFUL,
    payload
});
export const loginCreateUnsuccessful = payload => ({
    type: LOGIN.CREATE_UNSUCCESSFUL,
    payload
});