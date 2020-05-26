import { combineReducers } from 'redux';

import UserReducer from '../shared/reducers/User.reducer';
import LoginReducer from '../shared/reducers/Login.reducer';
import TableReducer from '../components/Table/Table.reducer';
import RegisterReducer from '../shared/reducers/Register.reducer';
import ForgotpasswordReducer from '../shared/reducers/Forgotpassword.reducer';

export default combineReducers({
    UserReducer, UserReducer,
    LoginReducer: LoginReducer,
    TableReducer: TableReducer,
    RegisterReducer: RegisterReducer,
    ForgotpasswordReducer: ForgotpasswordReducer,
});