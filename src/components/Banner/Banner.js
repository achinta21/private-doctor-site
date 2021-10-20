
import React from 'react';
import './Banner.css';
import slider1 from '../../images/slider/slider1.png';


const Banner = () => {
    return (
     <div className="banner d-flex align-items-center mb-5">
         <div className="">
            <img src={slider1} alt="" />
         </div>
         <div className="mt-5">
             <h1 className="fw-bold mt-5 mb-3 text-white">World Best <span className="text-warning">Hospital</span></h1>
             <p className="mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatum repellat sed maxime aperiam quia incidunt eum <br /> eos atque ab laudantium.</p>
             <button className="btn bg-danger text-white px-4 py-2 rounded fw-bold">Read More</button>
         </div>
     </div>
    );
};

export default Banner;