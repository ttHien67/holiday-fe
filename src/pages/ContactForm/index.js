import './ContactForm.scss';
import contactBackgroundImage from '@/assets/img/breadcrumb.jpg';

import { useState } from 'react';
import ContactService from '@/services/ContactServices';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function ContactForm() {
    const { id } = useParams('/packet/contact');
    const [contactInfo, setContactInfo] = useState({ packetID: id });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCommit = async () => {
        try {
            await ContactService.create(contactInfo);
            alert('Your contact has been sent');
        } catch (error) {
            alert(error);
        }
    };

    const handleCheckLengthMessage = (e) => {
        const countLetter = document.getElementById('check-length-message');
        const length = e.target.value.length;

        countLetter.innerText = length + '/100';
    };

    return (
        <>
            <div className="contact__slider" style={{ backgroundImage: `url(${contactBackgroundImage})` }}>
                <h1 className="contact__slider-title">Contact</h1>
                <div className="overlay overlay-contact"></div>
            </div>
            <div className="content-section contact__warpper">
                <div className="contact__form col-8">
                    <h1 className="contact__title">
                        Need to contact us? Use one of the options belows. Our team are always happy to help.
                    </h1>
                    <div className="contact__form-title">
                        <h1 className="contact__form-title-name">Email us</h1>
                        <p className="contact__form-title-subname">
                            Drop us an email and we'll get back to you within 48hrs...
                        </p>
                    </div>
                    <form className="contact__form-input" onSubmit={handleSubmit(handleCommit)}>
                        <div className="contact__form-input-container">
                            <div className="contact__form-input-item">
                                <label className="contact__form-input-item-name">Full Name</label>
                                <input
                                    className="contact__form-input-item-input"
                                    type="text"
                                    placeholder="Name"
                                    value={contactInfo.fullName}
                                    {...register('fullName', { required: true, maxLength: 24 })}
                                    onChange={(e) => {
                                        setContactInfo({ ...contactInfo, fullName: e.target.value });
                                    }}
                                />
                                {errors.fullName && (
                                    <p className="contact__form-input-item-error">Please check the Full Name</p>
                                )}
                            </div>
                            <div className="contact__form-input-item">
                                <label className="contact__form-input-item-name">Email</label>
                                <input
                                    className="contact__form-input-item-input"
                                    type="email"
                                    placeholder="someone@example.com"
                                    value={contactInfo.email}
                                    {...register('email', {
                                        required: true,
                                        pattern:
                                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                    onChange={(e) => {
                                        setContactInfo({ ...contactInfo, email: e.target.value });
                                    }}
                                />
                                {errors.email && (
                                    <p className="contact__form-input-item-error">Please check the Email</p>
                                )}
                            </div>
                        </div>
                        <div className="contact__form-input-item">
                            <label className="contact__form-input-item-name">Contact Number</label>
                            <input
                                className="contact__form-input-item-input"
                                type="text"
                                placeholder="123 456 789"
                                value={contactInfo.phone}
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
                                value={contactInfo.address}
                                {...register('phone', { required: true })}
                                onChange={(e) => {
                                    setContactInfo({ ...contactInfo, address: e.target.value });
                                }}
                            />
                            {errors.phone && (
                                <p className="contact__form-input-item-error">Please give me your address</p>
                            )}
                        </div>
                        <div className="contact__form-input-item">
                            <label className="contact__form-input-item-name">What's Your Message</label>
                            <textarea
                                className="contact__form-input-item-input"
                                rows="4"
                                placeholder="Your message"
                                value={contactInfo.message}
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
                </div>
                <div className="col-4">
                    <div className="contact__info">
                        <h1 className="contact__info-title">Trip Queries</h1>
                        <div className="contact__info-group">
                            <h3 className="contact__info-group-title">Emergency Helpline</h3>
                            <p className="contact__info-group-content">0242 242 0077</p>
                        </div>
                        <div className="contact__info-group">
                            <h3 className="contact__info-group-title">Contactable Hours</h3>
                            <p className="contact__info-group-content">Mon-Sun: 24 Hours</p>
                        </div>
                        <div className="contact__info-group">
                            <h3 className="contact__info-group-title">Require infomation about trip?</h3>
                            <p className="contact__info-group-content">Info@webhotel.vn</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
