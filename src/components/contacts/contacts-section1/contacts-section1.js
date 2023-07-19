import React from 'react';

const ContactsSection1 = () => {
    return (
        <div id='contacts-section1'>
            <div className='container'>
                <div className='contacts-section1'>
                    <p className='blue'>Any questions or suggestions? Write to us!</p>
                    <div className='cont-texts'>
                        <p>Do you want to book a tour? Contact us on WhatsApp, Telegram, Facebook</p>
                        <p>Phone number: + 996 700 308 646</p>
                        <p>Email address:</p>
                    </div>
                    <div className='inputs'>
                        <div className='cont-input'>
                            <p>Your name (required)</p>
                            <div className='cont-input1'>
                            <input type='text'></input>
                        </div>
                    </div>
                    <div className='cont-input'>
                        <p>Your e-mail (required)</p>
                        <div className='cont-input1'>
                            <input type='text'></input>
                        </div>
                    </div>
                    <div className='cont-input'>
                        <p>Topic</p>
                        <div className='cont-input1'>
                            <input type='text'></input>
                        </div>
                    </div>
                    <div className='Message'>
                        <p>Mesage</p>
                        <div className='cont-input2'>
                            <input type='text'></input>
                        </div>
                    </div>
                    <button>to send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsSection1;