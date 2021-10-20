import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark d-flex justify-content-evenly">
            <div className="text-white my-5">
            <h5> Offices info</h5>
            <h5>Email: jhsdfbn65@gmail.com</h5>
            <h5>Phone: +15486986523</h5>
            </div>
            <div className="mt-5">
                <form>
                    <label className="text-white mt-3" htmlFor="Email">Name  <input className="rounded" type="text" placeholder="Name"/></label>
                    <br />
                    <label className="text-white" htmlFor="text">Emails <input className="rounded" type="text" name="" id="" placeholder="Email" /></label>
                </form>
            </div>
            
        </div>
        
    );
};

export default Footer;