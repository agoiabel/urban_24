import React from "react";
import './shared/styles/app.scss';

import User from "./pages/User";
import Login from "./pages/Login";
import Terms from "./pages/Terms";
import Landing from "./pages/Landing";
import { Provider } from "react-redux";
import Register from "./pages/Register";
import store from './shared/root.store';
import Dashboard from "./pages/Dashboard";
import AuthGuard from "./shared/auth_guard";
import Forgotpassword from "./pages/Forgotpassword";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = props => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/terms" exact component={Terms} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/user:id" exact component={AuthGuard(User)} />
                    <Route path="/forgotpassword" exact component={Forgotpassword} />
                    <Route path="/dashboard" exact component={AuthGuard(Dashboard)} />

                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;