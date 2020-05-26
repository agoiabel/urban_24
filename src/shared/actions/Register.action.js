import { REGISTER } from '../constants/Register.constant';

export const registerCreate = payload => ({
    type: REGISTER.CREATE,
    payload
});
export const registerCreateSuccessful = payload => ({
    type: REGISTER.CREATE_SUCCESSFUL,
    payload
});
export const registerCreateUnsuccessful = payload => ({
    type: REGISTER.CREATE_UNSUCCESSFUL,
    payload
});