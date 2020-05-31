import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import * as Ionicons from 'react-icons/io';
import { FaSpinner } from "react-icons/fa";

const SIZES = {
    "btn__medium": `${styles.btn__medium}`, 
    "btn__large": `${styles.btn__large}`,
};
const TYPES = {
    "btn__transparent__dark": `${styles.btn__transparent__dark}`,
    "btn__transparent__light": `${styles.btn__transparent__light}`,
    "btn__primary__solid": `${styles.btn__primary__solid}`,
    "btn__warning__solid": `${styles.btn__warning__solid}`,
    "btn__danger__solid": `${styles.btn__danger__solid}`,

    "btn__primary__outline": `${styles.btn__primary__outline}`,
    "btn__warning__outline": `${styles.btn__warning__outline}`,
    "btn__danger__outline": `${styles.btn__danger__outline}`,
};

const Button = ({type, size, onClick, children, isLoading, disabled, iconName, iconPosition, btnStyle}) => {

    let content = (
        <React.Fragment>{children}</React.Fragment>
    )

    if (iconName) {
        const mdIcon = Ionicons[iconName];

        content = (
            <React.Fragment>
                { iconPosition === 'LEFT' ? (<div><span>{React.createElement(mdIcon)}</span> <span>{children}</span></div>) : (<div><span>{children}</span> <span>{React.createElement(mdIcon)}</span></div>) }
            </React.Fragment>
        )
    }

    let sizeClass = SIZES[size] || `${styles.btn__medium}`;
    let typeClass = TYPES[type] || `${styles.btn__primary__solid}`;

    let button = (
        <button onClick={onClick} className={`${styles.btn} ${typeClass} ${sizeClass}`} style={btnStyle} disabled={disabled || isLoading}>
            { !isLoading ? (<div>{content}</div>) : (<div className={styles.circle_container}><span className={styles.circle}></span></div>) }
        </button>
    );

    return (
        <React.Fragment>
            { button }
        </React.Fragment>
    )

}

Button.defaultProps = {
    size: 'btn__medium',
    type: 'btn__primary__solid',
}

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button;