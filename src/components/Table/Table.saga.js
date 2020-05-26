import { TABLE } from './Table.constant';
import { get, post } from '../../shared/http_client';
import { call, put, takeEvery,apply } from 'redux-saga/effects';
import { 
    getSuccessful, getUnsuccessful, 
    multipleActionExecutorSuccessful, multipleActionExecutorUnsuccessful 
} from './Table.action';

function* getValues(action) {
    try {
        let response = yield call(get, action.payload.url);
        
        const data = yield apply(response, response.json);

        if (data.status === 422) {
            return yield put(getUnsuccessful(data));
        }

        yield put(getSuccessful(data));
    } catch (error) {
        console.dir("Table-getValues");
        console.dir(error);
    }
}
function* excuteMultipleActions(action) {
    try {
        let response = yield call(post, action.payload.data, action.payload.url);
        
        const data = yield apply(response, response.json);

        if (data.status === 422) {
            return yield put(multipleActionExecutorUnsuccessful(data));
        }

        yield put(multipleActionExecutorSuccessful(data));
    } catch (error) {
        console.dir("Table-excuteMultipleActions");
        console.dir(error);
    }
}

function* watch() {
    yield takeEvery(TABLE.GET, getValues);
    yield takeEvery(TABLE.MULTIPLE_ACTION_EXECUTED, excuteMultipleActions);
}

export default watch;