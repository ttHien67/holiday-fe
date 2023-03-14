import ContactForm from '@/components/ContactForm';
import ContactService from '@/services/ContactServices';

import { Toaster } from 'react-hot-toast';
import { toastSuccess, toastError } from '@/hooks/useToast';

function ContactMaking() {
    const handleCommit = async (data, handleClearInput) => {
        try {
            await ContactService.create(data);
            handleClearInput();
            toastSuccess('Your contact has been sent')
        } catch (error) {
            toastError(error);
        }
    };

    return (
        <>
            <Toaster toastOptions={{ style: { fontSize: '1.4rem' } }} />
            <div className="packet-modifying-container">
                <h1 className="packet-modifying-title text-success">Contact Making</h1>

                <ContactForm onCommit={handleCommit} />
            </div>
        </>
    );
}

export default ContactMaking;
