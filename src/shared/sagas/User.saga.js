import { get } from '../http_client';
import { USER } from '../constants/User.constant';
import { call, put, takeEvery,apply } from 'redux-saga/effects';
import { userGetSuccessful, userGetUnsuccessful } from '../actions/User.action';

function* userGet(action) {
    try {
        let response = yield call(get, `user/show/${action.payload}`);
        
        const data = yield apply(response, response.json);

        if (data.status === 422) {
            return yield put(userGetUnsuccessful(data));
        }

        yield put(userGetSuccessful(data));
    } catch (error) {
        console.dir("userGet");
        console.dir(error);
    }
}

function* watch() {
    yield takeEvery(USER.GET, userGet);
}

export default watch;