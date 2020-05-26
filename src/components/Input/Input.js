import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const Input = ({name, type, control, icon, hasIcon, rules, register, errors, placeholder, ...others}) => {
    
    let input = (
        <div className={styles.hfh_form_group}>
            <Controller
              as={TextField}
              name={name}
              error={errors !== undefined}
              control={control}
              type={type}
              rules={rules}
              placeholder={placeholder}
              style={{
                width: "100%"
            }}
              {...others}
             />
             {/* {hasIcon && (
                <div className={styles.hfh_form_icon}>
                    <Icon />
                </div>
             )} */}
            {errors && (<p className={styles.form_error_message}>{errors.message}</p>)}
        </div>
    );

    return (
        <>
            { input }
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
}

export default Input;