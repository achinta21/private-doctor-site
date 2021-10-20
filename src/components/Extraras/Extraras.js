import React from 'react';
import './Extraras.css';

const Extraras = (props) => {
    const{name,img,prices}=props.extrara
    return (
        <div className="col">
         <div className="extraras-info h-80 mt-5">
        <img src={img} className="card-img-top w-75 m-auto mt-4 rounded" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">{name}</h5>
         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         <h4>prices: {prices}</h4>
         <button className="btns fw-bold text-white mt-2">Appy now</button>
         </div>
        </div>
  </div>
    );
};

export default Extraras;