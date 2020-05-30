import React from 'react';
import Button from '../../components/Button';
import styles from './RestrictedAccess.module.scss';

const RestrictedAccess = props => {
    const handleRedirect = () => {
        return props.history.push('/');
    }
    
    return (
        <div className={styles.container}>
            <div>
                <span>Restricted Access | If you think you have the right access, click the button below</span>
                <div className={styles.access}>
                    <Button onClick={() => handleRedirect()} type={'btn__primary__solid'} size={'btn__md'}>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default RestrictedAccess;