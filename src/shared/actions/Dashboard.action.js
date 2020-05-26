import { FORGET_PASSWORD } from '../constants/Forgotpassword.constant';

export const ForgotpasswordCreate = payload => ({
    type: FORGET_PASSWORD.CREATE,
    payload
});
export const ForgotpasswordCreateSuccessful = payload => ({
    type: FORGET_PASSWORD.CREATE_SUCCESSFUL,
    payload
});
export const ForgotpasswordCreateUnsuccessful = payload => ({
    type: FORGET_PASSWORD.CREATE_UNSUCCESSFUL,
    payload
});