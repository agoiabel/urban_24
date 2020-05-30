import { get, post } from '../http_client';
import { USER } from '../constants/User.constant';
import { call, put, takeEvery,apply } from 'redux-saga/effects';
import { userGetSuccessful, userGetUnsuccessful, userUpdateSuccessful, userUpdateUnsuccessful } from '../actions/User.action';

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

function* userUpdate(action) {
    try {
        let response = yield call(post, action.payload, `user/update`);
        
        const data = yield apply(response, response.json);

        if (data.status === 422) {
            return yield put(userUpdateUnsuccessful(data));
        }

        yield put(userUpdateSuccessful(data));
    } catch (error) {
        console.dir("userUpdate");
        console.dir(error);
    }
}

function* watch() {
    yield takeEvery(USER.GET, userGet);
    yield takeEvery(USER.UPDATE, userUpdate);
}

export default watch;