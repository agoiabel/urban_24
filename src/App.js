import React from "react";
import User from "./pages/User";
import './shared/styles/app.scss';
import Login from "./pages/Login";
import Terms from "./pages/Terms";
import Landing from "./pages/Landing";
import { Provider } from "react-redux";
import 'react-image-lightbox/style.css';
import Register from "./pages/Register";
import store from './shared/root.store';
import Dashboard from "./pages/Dashboard";
import check_status from './shared/check_status';
import Forgotpassword from "./pages/Forgotpassword";
import RestrictedAccess from "./pages/RestrictedAccess";
import { ToastProvider } from 'react-toast-notifications';
import AuthenticatedRoute from './shared/AuthenticatedRoute';
import UnauthenticatedRoute from './shared/UnauthenticatedRoute';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = props => {
    return (
        <Provider store={store}>
            <ToastProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/terms" exact component={Terms} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/forgotpassword" exact component={Forgotpassword} />
                        <Route path="/unrestricted" exact component={RestrictedAccess} />

                        <Route path="/user/:id" exact component={User} />
                        <Route path="/dashboard" exact component={Dashboard} />


                        {/* <AuthenticatedRoute path="/dashboard" exact component={Dashboard} appProps={{ isAuthenticated }} /> */}

                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </ToastProvider>
        </Provider>
    );
}

export default App;