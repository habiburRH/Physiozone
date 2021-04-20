import React from 'react';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center text-center">
            <div className="col-md-12">
                <h1 className="custom-font text-dark m-5">We Create and Renovate <br /> Enjoyable physiotherapy</h1>
                <button className="btn btn-outline-danger">TAKE APPOINTMENT <FontAwesomeIcon className="ml-2" icon={faFingerprint} /></button>
            </div>
        </main>
    );
};

export default HeaderMain;