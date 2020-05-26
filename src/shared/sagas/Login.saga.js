import { post } from '../http_client';
import { setStorage } from '../storage';
import { LOGIN } from '../constants/Login.constant';
import { call, put, takeEvery,apply } from 'redux-saga/effects';
import { loginCreateSuccessful, loginCreateUnsuccessful } from '../actions/Login.action';

function* loginCreate(action) {
    try {
        let response = yield call(post, action.payload, 'login/store');
        
        const data = yield apply(response, response.json);

        if (data.status === 422) {
            return yield put(loginCreateUnsuccessful(data));
        }

        yield call(setStorage, 'URBAN24', data.data);
        yield call(setStorage, 'URBAN24_TOKEN', data.data.auth_token);

        yield put(loginCreateSuccessful(data));
    } catch (error) {
        console.dir("signupStart");
        console.dir(error);
    }
}

function* watch() {
    yield takeEvery(LOGIN.CREATE, loginCreate);
}

export default watch;