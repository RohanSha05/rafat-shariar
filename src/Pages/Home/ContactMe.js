import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

const ContactMe = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        send(
            'service_1afltgs',
            'template_bfi1vu3',
            toSend,
            'R5_fsxQ-DFrURz7F1'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div className='flex justify-center'>
            <div>
                <h2 className='text-4xl text-center mt-10'>Contact Me</h2>
                <form className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-12' onSubmit={onSubmit}>
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <input
                        class="input input-bordered input-md w-full max-w-xs"
                        type='Name'
                        name='from_name'
                        placeholder='from name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <label class="label">
                        <span class="label-text">Your Massage</span>
                    </label>
                    <input
                        class="input input-bordered input-lg w-full max-w-xs mt-4"
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                    <input
                        className='input input-bordered input-md w-full max-w-xs mt-4'
                        type='text'
                        name='reply_to'
                        placeholder='Email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <button className='btn btn-ghost mt-5' type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;