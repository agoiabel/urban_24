import { post } from '../http_client';
import { setStorage } from '../storage';
import { REGISTER } from '../constants/Register.constant';
import { call, put, takeEvery,apply } from 'redux-saga/effects';
import { registerCreateSuccessful, registerCreateUnsuccessful } from '../actions/Register.action';

function* registerCreate(action) {
    try {
        let response = yield call(post, action.payload, 'register/store');
        
        const data = yield apply(response, response.json);

        if (data.status === 422) {
            return yield put(registerCreateUnsuccessful(data));
        }

        yield put(registerCreateSuccessful(data));
    } catch (error) {
        console.dir("signupStart");
        console.dir(error);
    }
}

function* watch() {
    yield takeEvery(REGISTER.CREATE, registerCreate);
}

export default watch;