import { post } from '../http_client';
import { setStorage } from '../storage';
import { call, put, takeEvery,apply } from 'redux-saga/effects';
import { FORGET_PASSWORD } from '../constants/Forgotpassword.constant';
import { ForgotpasswordCreateSuccessful, ForgotpasswordCreateUnsuccessful } from '../actions/Forgotpassword.action';

function* ForgotpasswordCreate(action) {
    try {
        let response = yield call(post, action.payload, 'forgotpassword/store');
        
        const data = yield apply(response, response.json);

        if (data.status === 422) {
            return yield put(ForgotpasswordCreateUnsuccessful(data));
        }

        yield put(ForgotpasswordCreateSuccessful(data));
    } catch (error) {
        console.dir("signupStart");
        console.dir(error);
    }
}

function* watch() {
    yield takeEvery(FORGET_PASSWORD.CREATE, ForgotpasswordCreate);
}

export default watch;