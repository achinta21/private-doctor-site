import React, { useEffect, useState } from 'react';
import './Servies.css';
import Servie from '../Servie/Servie';
import img from '../../images/doctor/banner6.jpg';


const Servies = () => {
    const [servies,setServies]=useState([]);
    useEffect(()=>{
        fetch('servies.JSON')
        .then(res=>res.json())
        .then(data=>setServies(data))
    },[])
    return (
        <div className="servies-container">
         <div>
             <img className="w-100" src={img} alt="" />
         </div>
         <h3 className="fw-bold my-5">Welcome To <span className="text-warning">Best Servies</span> </h3>
          <div class="row row-cols-1 row-cols-md-3 g-4 ms-5 me-5 ">
              {
              servies.map(servie=><Servie key={servie.id} servie={servie}></Servie>)
              }
          </div>
        </div>
    );
};

export default Servies;