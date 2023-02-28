import ContactForm from '@/components/ContactForm';
import ContactService from '@/services/ContactServices';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

function ContactEdition() {
    const { id } = useParams('/manage/contact/edit');

    const [contactEditon, setContactEdition] = useState()

    useEffect(() => {
        const fetchApi = async () => {
            const result = await ContactService.get(id);
            setContactEdition(result);
        }

        fetchApi()
    },[id])

    const handleCommit = async (data, handleClearInput) => {
        try {
            await ContactService.update(id, data);
            handleClearInput();
            alert('Your contact has been updated');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="packet-modifying-container">
            <h1 className="packet-modifying-title text-success">Contact Edition</h1>

            <ContactForm onCommit={handleCommit} contactEdition={contactEditon}/>
        </div>
    );
}

export default ContactEdition;
