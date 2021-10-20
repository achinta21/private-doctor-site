import React from 'react';
import './Appointment.css';
import appointment from '../../images/doctor/banner4.jpg';


const Appointment = () => {
    return (
        <div>
            <div>
                <img className="w-100" src={appointment} alt="" />
            </div>
            <div className="form">
                <h3 className="fw-bold my-5">Make an Appointment</h3>
                <form>
                    <input className="w-25 m-2 rounded" type="text" placeholder="Name"/>
                    <br />
                    <input className="w-25 m-2 rounded" type="text" placeholder="Phone Number"/>
                    <br />
                    <input className="w-25 m-2 rounded" type="email" name="" id="" placeholder="Email Address"/>
                    <br />
                   <textarea name="" id="" cols="40" rows="5" placeholder="message"></textarea>
                   <br />
                   <button className="btn text-white fw-bold mb-2">Submit Request</button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;