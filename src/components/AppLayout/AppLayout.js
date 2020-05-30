import React from 'react';
import { Link } from  'react-router-dom';
import { withRouter } from 'react-router';
import styles from './AppLayout.module.scss';
import AuthBg1 from '../../images/auth1.svg';
import AuthBg2 from '../../images/auth2.svg';
import logo from '../../images/urban24-logo.png';
import { FiLogOut, FiList } from 'react-icons/fi';
import check_status from '../../shared/check_status';
import { getStorage, removeStorage } from '../../shared/storage';

const AppLayout = props => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(0);
    
    const logout = async () => {
        try {
            await removeStorage('URBAN24');
            await removeStorage('URBAN24_TOKEN');
            return props.history.push('/');
        } catch (err) {
            alert('error deleting storage')
        }
    }

    React.useEffect(() => {
        onLoad();
    }, []);
    
    async function onLoad() {
        try {
            const token = await check_status();
            const status = token !== null ? true : false;
            const user = await getStorage('URBAN24');

            setIsAuthenticated(status);

            if (!status || !user.is_admin) {
                props.history.push('/unrestricted');
            }
        } catch (e) {
            console.dir(e);
        }
    }

    return (
        <div>
            <div>
                <meta charSet="utf-8" />
                <title>Urban24 - {props.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" type="image/png" href="./images/favicon.ico" />
                <meta property="og:title"         content="Urban 24 contest" />
                <meta property="og:description"   content="Join to win" />
                <meta property="og:image"         content="http://www.your-domain.com/path/image.jpg" />
            </div>
            <div className={styles.app_screen}>
                <div className={styles.app_screen_sidebar}>
                    {/* <img className={styles.app_screen_bg1} src={AuthBg1} alt="Urban24 sign up" /> */}
                    <img className={styles.app_screen_bg2} src={AuthBg2} alt="Urban24 sign up" />
                    <img className={styles.app_screen_bg3} src={AuthBg1} alt="Urban24 sign up" />
                    <img className={styles.app_screen_bg4} src={AuthBg2} alt="Urban24 sign up" />

                    <div className={styles.sidebar_content}>
                        <div className={styles.sidebar_content_logo}>
                            <img src={logo} alt="Urban24 logo" />
                        </div>
                        <div className={styles.sidebar_content_routes}>
                            <Link to="/dashboard" className={styles.route}>
                                <FiList color="#fff" size={20} style={{ marginRight: '1rem', transform: 'rotate(180deg)' }} />
                                <p>Entries</p>
                            </Link>
                        </div>
                        <div className={styles.sidebar_content_logout} onClick={() => logout()}>
                            <FiLogOut color="#fff" size={20} style={{ marginRight: '1rem', transform: 'rotate(180deg)' }} />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.app_screen_content} ${props.pageStyle}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default withRouter(AppLayout);