import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Input from '../../components/Input';
import Button from '../../components/Button';
import AuthLayout from '../../components/AuthLayout';
import { useDispatch, useSelector } from "react-redux";
import { MdEmail, MdLockOutline } from "react-icons/md";
import { loginCreate } from '../../shared/actions/Login.action';
import authStyles from '../../components/AuthLayout/AuthLayout.module.scss';

const Login = props => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);
	const {status, message} = useSelector(state => state.LoginReducer);
    const { register, handleSubmit, formState, errors, setValue, control } = useForm({
        mode: "onChange",
    });
    
    const emailIcon = () => <MdEmail size={15} />;
    const passwordIcon = () => <MdLockOutline size={15} />;

    const onSubmit = async data => {
		setIsLoading(true);
		dispatch(loginCreate(data));
    };

	React.useEffect(() => {
		if (status === 422) {
            setIsLoading(false);
            return alert(message);
		}
		if (status === 200) {
            setTimeout(() => { 
                if (props.location.search.length) {
                    return props.history.push(props.location.search.split("=")[1]);
                }
                return props.history.push('/dashboard');
            }, 1000);
        }
    }, [status, message]);

    const variants = {
        hidden: { opacity: 0, y: '100%' },
        visible: { opacity: 1, y: 0, transition: {
            duration: 0.5
        }},
    }
    
    return (
        <AuthLayout title={'Login'}>
            <Link to={'/'} className={authStyles.auth_screen_logo}>
                <img src={require('../../images/logo.svg')} alt="Urban24 logo" />
            </Link>
            <div className={authStyles.auth_form}>

                <motion.div className={authStyles.auth_form_box} initial={"hidden"} animate={"visible"} variants={variants}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type={'email'} name="email" control={control} hasIcon icon={emailIcon} placeholder="Email Address" errors={errors.email} rules={{required: "email is a required",pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }}} />

                        <Input type={"password"} name="password" control={control} hasIcon icon={passwordIcon} placeholder="Password" errors={errors.password} rules={{required: "password is a required"}} />

                        <Button type={'btn__primary__solid'} size={'btn__large'} isLoading={isLoading} disabled={!formState.isValid}>Login</Button>
                    </form>
                    <div className={authStyles.auth_link}>
                        <Link to="/forgotpassword" as="/forgotpassword" className="link-text">
                            Forgot password
                        </Link>
                    </div>
                </motion.div>

            </div>
        </AuthLayout>
    )
}

export default Login;