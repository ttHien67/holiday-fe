import background from '@/assets/img/discover/nature.jpg';
import Button from '@/components/Button';
import AccountServices from '@/services/AccountServices';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Register() {
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [account, setAccount] = useState({ date: `${month}/${day}/${year}` });

    const handleClearInput = () => {
        setAccount({
            fullName: '',
            username: '',
            email: '',
            password: '',
            address: '',
            passwordConfirm: '',
        });
    };

    const onSubmit = async (data) => {
        try {
            if (data) {
                const document = await AccountServices.create(data);
                alert(JSON.stringify(document.message));
                handleClearInput();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login__container" style={{ backgroundImage: `url(${background})` }}>
            <div className="login__wrapper">
                <h1 className="login__title">Register</h1>
                <form className="login__form" onSubmit={handleSubmit(() => onSubmit(account))}>
                    <div className="login__input">
                        <label className="login__input-name">Full Name</label>
                        <input
                            className="login__input-content"
                            type="text"
                            value={account?.fullName}
                            placeholder="Type your Full Name ..."
                            {...register('fullName', {
                                required: 'Full Name is required.',
                                minLength: {
                                    value: 5,
                                    message: 'Full Name must be more than 5 characters',
                                },
                            })}
                            onChange={(e) => {
                                setAccount({ ...account, fullName: e.target.value });
                            }}
                        />
                        {errors.fullName && <p className="contact__form-input-item-error">{errors.fullName.message}</p>}
                    </div>

                    <div className="login__input-group">
                        <div className="login__input">
                            <label className="login__input-name">Username</label>
                            <input
                                className="login__input-content"
                                type="text"
                                value={account?.username}
                                x
                                placeholder="Type your Username ..."
                                {...register('username', {
                                    required: 'Username is required.',
                                    minLength: {
                                        value: 5,
                                        message: 'Username must be more than 5 characters',
                                    },
                                })}
                                onChange={(e) => {
                                    setAccount({ ...account, username: e.target.value });
                                }}
                            />
                            {errors.username && (
                                <p className="contact__form-input-item-error">{errors.username.message}</p>
                            )}
                        </div>
                        <div className="login__input">
                            <label className="login__input-name">Email</label>
                            <input
                                className="login__input-content"
                                type="email"
                                value={account?.email}
                                placeholder="Type your Email ..."
                                {...register('email', {
                                    required: 'Email is required.',
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Invalid email',
                                    },
                                })}
                                onChange={(e) => setAccount({ ...account, email: e.target.value })}
                            />
                            {errors.email && <p className="contact__form-input-item-error">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="login__input">
                        <label className="login__input-name">Address</label>
                        <input
                            className="login__input-content"
                            type="text"
                            value={account?.address}
                            placeholder="Type your Address ..."
                            {...register('address', {
                                required: 'Address is required.',
                            })}
                            onChange={(e) => setAccount({ ...account, address: e.target.value })}
                        />
                        {errors.address && <p className="contact__form-input-item-error">{errors.address.message}</p>}
                    </div>
                    <div className="login__input">
                        <label className="login__input-name">Password</label>
                        <input
                            className="login__input-content"
                            type="password"
                            value={account?.password}
                            placeholder="Type your Password ..."
                            {...register('password', {
                                required: 'Username is required.',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be more than 8 characters',
                                },
                            })}
                            onChange={(e) => setAccount({ ...account, password: e.target.value })}
                        />
                        {errors.password && <p className="contact__form-input-item-error">{errors.password.message}</p>}
                    </div>

                    <div className="login__input">
                        <label className="login__input-name">Confirm Password</label>
                        <input
                            className="login__input-content"
                            type="password"
                            value={account?.passwordConfirm}
                            placeholder="Type your Password ..."
                            {...register('passwordConfirm', {
                                required: 'Username is required.',
                                validate: (value) => {
                                    if (watch('password') !== value) {
                                        return 'Your passwords do no match';
                                    }
                                },
                            })}
                            onChange={(e) => setAccount({ ...account, passwordConfirm: e.target.value })}
                        />
                        {errors.passwordConfirm && (
                            <p className="contact__form-input-item-error">{errors.passwordConfirm.message}</p>
                        )}
                    </div>

                    {/* <Button className="login__input-help"></Button> */}

                    <button className="login__input-btn" type="submit">
                        Register
                    </button>
                </form>
                <div className="login__text">
                    <span className="login__text-content">Already to login ? </span>
                    <Button to={'/login'} className="login__btn-text">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Register;
