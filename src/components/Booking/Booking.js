import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const{servieId}=useParams();
    
    return (
        <div>
            <h1>welcome to booking: {servieId}</h1>
            
        </div>
    );
};

export default Booking;