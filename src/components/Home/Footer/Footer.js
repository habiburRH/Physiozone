import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const work = [
        {name: "Emergency Physio Service" , link: "/emergency"},
        {name: "Physiologist Repair" , link: "/Physiologist Repair"},
        {name: "String Extraction" , link: "/string-extract"},
        {name: "Physiologist tune" , link: "/Physiologist tune"},
    ]
    const ourAddress = [
        {name: "Dhaka Azimpur - 1216" , link: "//google.com/map"},
        {name: "Dhaka" , link: "//google.com/map"},
       
    ]
    const type = [
        {name: "Heat therapy" , link: "/Heat therapy"},
        {name: "Massages" , link: "/Msassages"},
        {name: "Exercise" , link: "/Exercise"},
    ]
    const services = [
        {name: "Emergency physio Service" , link: "/emergency"},
        {name: "Physiologist Repair" , link: "/Physiologist Repair"},
        {name: "String Extraction" , link: "/string-extract"},
        {name: "Physiologist tune" , link: "/Physiologist tune"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Work"} menuItems={work}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Type" menuItems={type}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+011111111111</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved By Habibur Rahman</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;