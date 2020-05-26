import React from 'react';
import {Link} from 'react-router-dom';
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
        setIsLoading(false);
		if (status === 422) {
            return alert(message);
		}
		if (status === 200) {
            // Router.push('/dashboard');
        }
    }, [status, message]);
    
    return (
        <AuthLayout title={'Login'}>
            <div className={authStyles.auth_screen_logo}>
                <img src={require('../../images/urban24-logo.png')} alt="Urban24 logo" />
            </div>
            <div className={authStyles.auth_form}>
                <div className={authStyles.auth_form_box}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type={'email'} name="email" control={control} hasIcon icon={emailIcon} placeholder="Email Address" errors={errors.email} rules={{required: "email is a required",pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }}} />

                        <Input type={"password"} name="password" control={control} hasIcon icon={passwordIcon} placeholder="Password" errors={errors.password} rules={{required: "password is a required"}} />

                        <Button type={'btn__primary__solid'} size={'btn__large'} isLoading={isLoading} disabled={!formState.isValid}>Login</Button>
                    </form>
                    <div className={authStyles.auth_link}>
                        <Link to="/forgotpassword" as="/forgotpassword">
                            <a className="link-text">Forgot password</a>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}


export default Login;