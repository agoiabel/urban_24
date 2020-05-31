import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import Input from '../../components/Input';
import Button from '../../components/Button';
import AuthLayout from '../../components/AuthLayout';
import { useDispatch, useSelector } from "react-redux";
import logo from '../../images/urban24-logo.png';
import authStyles from '../../components/AuthLayout/AuthLayout.module.scss';
import { ForgotpasswordCreate } from '../../shared/actions/Forgotpassword.action';

const Forgotpassword = props => {

    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
	const {status, message} = useSelector(state => state.ForgotpasswordReducer);
    const { register, handleSubmit, formState, errors, setValue, control } = useForm({
        mode: "onChange",
    });
    
    const emailIcon = () => <MdEmail size={15} />;
    const onSubmit = async data => {
		setIsLoading(true);
		dispatch(ForgotpasswordCreate(data));
    };

	React.useEffect(() => {
        setIsLoading(false);
		if (status === 422) {
            return alert(message);
		}
		if (status === 200) {
            setPage(1);
        }
    }, [status, message]);


    const variants = {
        hidden: { opacity: 0, y: '100%' },
        visible: { opacity: 1, y: 0, transition: {
            duration: 0.5
        }},
    }

    let screen = (
        <React.Fragment>
            <h1 className={authStyles.auth_form_header}>Enter your account email and we’ll send your password to you.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={'email'} name="email" control={control} hasIcon icon={emailIcon} placeholder="Email" errors={errors.email} rules={{required: "email is a required",pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                }}} />

                <Button type={'btn__primary__solid'} size={'btn__large'} isLoading={isLoading} disabled={!formState.isValid}>Submit</Button>
            </form>
        </React.Fragment>
    );

    if (page === 1) {
        screen = (
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 2}} className={authStyles.auth_form_header}>Your password has been sent to personsemail@gmail.com</motion.h1>
        );
    }

    return (
        <AuthLayout title={'Forgotpassword'}>
            <div className={authStyles.auth_screen_logo}>
                <img src={logo} alt="Urban24 logo" />
            </div>
            <div className={authStyles.auth_form}>
                <motion.div className={authStyles.auth_form_box} initial={"hidden"} animate={"visible"} variants={variants}>
                    { screen }
                    <div className={authStyles.auth_link}>
                        <Link to="/login" className="link-text">
                            Return to Login
                        </Link>
                    </div>
                </motion.div>
            </div>
        </AuthLayout>
    )
}

export default Forgotpassword;