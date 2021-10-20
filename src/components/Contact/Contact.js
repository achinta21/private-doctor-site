import React from 'react';
import './Contact.css';
import banner6 from '../../images/doctor/banner6.jpg'

const Contact = () => {
    return (
        <div>
            <div>
            <img className="w-100" src={banner6} alt="" />
            </div>
            <div className="contact-item">
                <h3 className="fw-bold my-5">Contact Us</h3>
                <div>
                <form action="">
                    <input className="w-25 mb-2" type="text" placeholder="Full Name"/>
                    <br />
                    <input className="w-25 mb-2"  type="text" placeholder="Email Address"/>
                    <br />
                    <input className="w-25 mb-2" type="text" placeholder="Phone Number"/>
                    <br />
                    <textarea name="" id="" cols="40" rows="5" placeholder="message"></textarea>
                    <br />
                    <button className="btn text-white fw-bold ">Sumbit</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;