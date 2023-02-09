// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';

const ContactModal = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m5g58fb', 'template_pjuuara', form.current, 'H1FDX9WkK7hJQntOL')
            .then((response) => {
                console.log('SUCCESS!', response.status);
                toast.success('Your Comment Successfully Send..!');
                e.target.reset();
            }, (err) => {
                console.log('FAILED...', err);
            });



    }
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <form className="card-body" ref={form} onSubmit={sendEmail}>

                        <div className="form-control">
                            <input type="text" name='user_name' placeholder="Your Name*" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='user_email' placeholder="Your@gmail.com*" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <textarea name='message' className="textarea textarea-bordered" required placeholder="write your query..*"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-secondary w-full hover:btn-secondary">Submit</button>
                        </div>
                    </form>
                </label>
            </label>
        </div>
    );
};

export default ContactModal;