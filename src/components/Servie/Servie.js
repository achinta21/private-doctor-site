import React from 'react';
import './Servie.css';
import { Link } from 'react-router-dom';

const Servie = ({servie}) => {
const{id,name,img,Day,visit,home,phone}=servie;
    return (
        <div className="col">
        <div className="servies-info">
      <img src={img} className="card-img-top w-75 mt-4 rounded" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">home:{home}</p>
        <p className="card-text">phone:{phone}</p>
        <h4 className="card-text">visit:{visit}</h4>
        <Link to={`/booking/${id}`}>
        <button className="btn bg-danger fw-bold rounded text-white">Details</button>
        </Link>
      </div>
    </div>
  </div>
    );
};

export default Servie;