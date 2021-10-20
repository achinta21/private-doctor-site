import React, { useEffect, useState } from 'react';
import Extraras from '../Extraras/Extraras';
import './Extrara.css';

const Extrara = () => {
    const [extraras,setExtraras]=useState([]);
    useEffect(()=>{
        fetch('extrara.JSON')
        .then(res=>res.json())
        .then(data=> setExtraras(data))
    },[])
    return (
       <div className="extrara-container">
           <h3 className="fw-bold my-5">Best Doctor <span className="text-warning">Hostpital</span></h3>
        <div class="extrara-item row row-cols-1 row-cols-md-3 g-4 ms-5 me-5">
            {
                extraras.map(extrara=>
                <Extraras key={extrara.id} extrara={extrara}>
                </Extraras>)
            }
       </div>
       </div>
    );
};

export default Extrara;