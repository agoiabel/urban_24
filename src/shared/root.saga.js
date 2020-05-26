import { all } from 'redux-saga/effects';

import UserSaga from '../shared/sagas/User.saga';
import LoginSaga from '../shared/sagas/Login.saga';
import TableSaga from '../components/Table/Table.saga';
import RegisterSaga from '../shared/sagas/Register.saga';
import ForgotpasswordSaga from '../shared/sagas/Forgotpassword.saga';

function* rootSaga() {
    yield all([
        UserSaga(),
        TableSaga(),
        LoginSaga(),
        RegisterSaga(),
        ForgotpasswordSaga(),
    ]);
}

export default rootSaga;