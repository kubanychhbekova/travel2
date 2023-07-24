import React from 'react';
import ContactsSection1 from './contacts-section1/contacts-section1';
import ContactsBg from './contacts-bg/contacts-bg';
import Newlink from '../newLink/newLink';


const Contacts = () => {
    return (
        <div>
            <ContactsBg/>
            <ContactsSection1/>
            <Newlink/>
        </div>
    );
};

export default Contacts;