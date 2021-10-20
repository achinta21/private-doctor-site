import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/doctor/NotFound.png';

const NotFound = () => {
    return (
        <div className="p-5">
           <img src={notFound} alt="" />
           <Link to="/"><button className="btn bg-danger py-2 px-4 text-white fw-bold">Go Back</button></Link>
        </div>
    );
};

export default NotFound;