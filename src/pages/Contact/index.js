import './Contact.scss';
import contactBackgroundImage from '@/assets/img/breadcrumb.jpg';
import ContactService from '@/services/ContactServices';
import ContactForm from '@/components/ContactForm';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { toastSuccess, toastError } from '@/hooks/useToast';

function Contact() {
    const { id } = useParams('/packet/contact');
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    };

    const handleCommit = async (data, handleClearInput) => {
        try {
            await ContactService.create(data);
            toastSuccess('Contact has been created');
            handleClearInput();
        } catch (error) {
            toastError(error);
        }
    };

    return (
        <>
            <Toaster toastOptions={{ style: { fontSize: '1.4rem' } }} />
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
                    <div className="contact__form-input-item">
                        <label className="contact__form-input-item-name" htmlFor="quantity">
                            Quantity
                        </label>
                        <select id="quantity" className="contact__form-input-item-input" onClick={handleQuantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={'group'}>Group</option>
                        </select>
                    </div>
                    {/* Contact form */}
                    <ContactForm id={id} onCommit={handleCommit} quantity={quantity} />
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

export default Contact;
