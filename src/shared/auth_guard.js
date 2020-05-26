import React from 'react';
import { getStorage } from './storage';
import { withRouter } from 'react-router';

export default function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {
        state = {
            isLogedIn: 0
        }

        componentDidMount() {
            this.checkAuth();
        }

        checkAuth = async () => {

            try {
                const authUserId = await getStorage("URBAN24_TOKEN") || 0;

                this.setState({
                    isLogedIn: authUserId
                });

                if (authUserId !== 0) {
                    return this.props.history.push('/auth');
                }

            } catch (error) {
                console.dir('Error getting in storage');
            }

        }

        render() {
            return this.state.isLogedIn === 0 ? <Component {...this.props} /> : null;
        }
    }

    return withRouter(AuthenticatedComponent);
}