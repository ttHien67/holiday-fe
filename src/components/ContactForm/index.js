import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.scss';

function ContactForm({ id, quantity, onCommit, contactEdition }) {
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    const [contactInfo, setContactInfo] = useState({
        packetID: id,
        date: `${month}/${day}/${year}`,
        quantity: quantity,
    });

    useEffect(() => {
        setContactInfo(contactEdition);
    }, [contactEdition]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleClearInput = () => {
        setContactInfo({
            fullName: '',
            email: '',
            phone: '',
            address: '',
            message: '',
        });
    };

    const handleCheckLengthMessage = (e) => {
        const countLetter = document.getElementById('check-length-message');
        const length = e.target.value.length;

        countLetter.innerText = length + '/100';
    };

    return (
        <form className="contact__form-input" onSubmit={handleSubmit(() => onCommit(contactInfo, handleClearInput))}>
            <div className="contact__form-input-container">
                <div className="contact__form-input-item">
                    <label className="contact__form-input-item-name">Full Name</label>
                    <input
                        className="contact__form-input-item-input"
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                        value={contactInfo?.fullName || ''}
                        {...register('fullName', { required: true, maxLength: 24 })}
                        onChange={(e) => {
                            setContactInfo({ ...contactInfo, fullName: e.target.value });
                        }}
                    />
                    {errors.fullName && <p className="contact__form-input-item-error">Please check the Full Name</p>}
                </div>
                <div className="contact__form-input-item">
                    <label className="contact__form-input-item-name">Email</label>
                    <input
                        className="contact__form-input-item-input"
                        type="email"
                        placeholder="someone@example.com"
                        autoComplete="off"
                        value={contactInfo?.email || ''}
                        {...register('email', {
                            required: true,
                            pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        onChange={(e) => {
                            setContactInfo({ ...contactInfo, email: e.target.value });
                        }}
                    />
                    {errors.email && <p className="contact__form-input-item-error">Please check the Email</p>}
                </div>
            </div>
            <div className="contact__form-input-item">
                <label className="contact__form-input-item-name">Contact Number</label>
                <input
                    className="contact__form-input-item-input"
                    type="text"
                    placeholder="123 456 789"
                    autoComplete="off"
                    value={contactInfo?.phone || ''}
                    {...register('phone', { required: true, maxLength: 11 })}
                    onChange={(e) => {
                        setContactInfo({ ...contactInfo, phone: e.target.value });
                    }}
                />
                {errors.phone && <p className="contact__form-input-item-error">Please check your phone</p>}
            </div>
            <div className="contact__form-input-item">
                <label className="contact__form-input-item-name">Address</label>
                <input
                    className="contact__form-input-item-input"
                    type="text"
                    placeholder="Your address"
                    autoComplete="off"
                    value={contactInfo?.address || ''}
                    {...register('address', { required: true })}
                    onChange={(e) => {
                        setContactInfo({ ...contactInfo, address: e.target.value });
                    }}
                />
                {errors.address && <p className="contact__form-input-item-error">Please give me your address</p>}
            </div>
            <div className="contact__form-input-item">
                <label className="contact__form-input-item-name">What's Your Message</label>
                <textarea
                    className="contact__form-input-item-input"
                    rows="4"
                    placeholder="Your message"
                    autoComplete="off"
                    value={contactInfo?.message || ''}
                    {...register('message', { maxLength: 100 })}
                    onChange={(e) => {
                        handleCheckLengthMessage(e);
                        setContactInfo({ ...contactInfo, message: e.target.value });
                    }}
                ></textarea>
                <div className="contact__form-input-item-note">
                    {errors.message && (
                        <p className="contact__form-input-item-error">Please check your letter length</p>
                    )}
                    <p className="contact__form-input-item-length" id="check-length-message">
                        0<span>/100</span>
                    </p>
                </div>
            </div>
            <button type="submit" className="contact___btn">
                Submit
            </button>
        </form>
    );
}

export default ContactForm;
