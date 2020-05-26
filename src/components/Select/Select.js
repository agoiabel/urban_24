import React from 'react';
import styles from './Select.module.scss';
import { Controller } from "react-hook-form";
import {Select, MenuItem,InputLabel,FormControl } from "@material-ui/core";

const SelectContainer = ({name, rules, options, control, placeholder, errors, defaultValue, handleSelect, ...others}) => {
        
    return (
        <React.Fragment>
            <FormControl className={styles.formControl}>
                <InputLabel id="demo-simple-select-helper-label">{placeholder}</InputLabel>
                <Controller
                    style={{
                        width: "100%",
                        marginBottom: "1rem"
                    }}
                    as={
                        <Select error={errors !== undefined} placeholder={placeholder}>
                            {options.map((option, i) => {
                                return (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    }
                    name={name}
                    rules={rules}
                    control={control}
                    value={defaultValue}
                    {...others}
                />
            </FormControl>

            {errors && (<p className={styles.form_error_message}>{errors.message}</p>)}
        </React.Fragment>
    )
}

export default SelectContainer;