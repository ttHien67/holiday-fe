import './Login.scss';
import background from '@/assets/img/discover/nature.jpg';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="login__container" style={{ backgroundImage: `url(${background})` }}>
            <div className="login__wrapper">
                <h1 className="login__title">LOG IN</h1>
                <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="login__input">
                        <label className="login__input-name">Username</label>
                        <input
                            className="login__input-content"
                            type="text"
                            autoComplete="off"
                            placeholder="Type your Username ..."
                            {...register('username', {
                                required: 'This input is required.',
                                pattern: {
                                    value: ' ',
                                    message: 'Invalid username',
                                },
                            })}
                        />
                        {errors.username && <p className="contact__form-input-item-error">{errors.username.message}</p>}
                    </div>
                    <div className="login__input">
                        <label className="login__input-name">Password</label>
                        <input
                            className="login__input-content"
                            type="text"
                            placeholder="Type your Password ..."
                            autoComplete="off"
                            {...register('password', {
                                required: 'This input is required.',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be more than 8 characters',
                                },
                            })}
                        />
                        {errors.password && <p className="contact__form-input-item-error">{errors.password.message}</p>}
                    </div>
                    <span className="login__input-help" to={'/login'}>
                        Forgot password ?
                    </span>
                    <button className="login__input-btn" type="submit">
                        Log in
                    </button>
                </form>
                <div className="login__text">
                    <span className="login__text-content">Haven't account? </span>
                    <Button to={'/register'} className="login__btn-text">
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
