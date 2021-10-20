import React from 'react';
import './Chember.css';
import doctor from '../../images/doctor/doctor.png';
import doctor2 from '../../images/doctor/doctor2.png'

const Chember = () => {
    return (
        <div>
            <h3 className="mb-5 fw-bold"> How Becoming a <span className="text-warning">Doctor Works</span></h3>
            <div className="Doctor-work d-flex align-items-center mb-5 mt-5">
                <div className="col-lg-6">
                    <h4 className="mb-3">Becoming a Doctor Works</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Rerum magni illum tempora eligendi ullam, esse in <br /> accusantium necessitatibus sapiente quasi!</p>
                    <button className="btn text-white fw-bold mt-3">Appy now</button>
                </div>
                <div className="col-lg-6">
                    <img className="w-75 rounded" src={doctor} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Chember;