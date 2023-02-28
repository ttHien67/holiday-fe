import ContactForm from '@/components/ContactForm';
import ContactService from '@/services/ContactServices';

function ContactMaking() {
    const handleCommit = async (data, handleClearInput) => {
        try {
            await ContactService.create(data);
            handleClearInput();
            alert('Your contact has been sent');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="packet-modifying-container">
            <h1 className="packet-modifying-title text-success">Contact Making</h1>

            <ContactForm onCommit={handleCommit} />
        </div>
    );
}

export default ContactMaking;
