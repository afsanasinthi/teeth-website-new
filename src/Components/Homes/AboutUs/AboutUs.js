import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import aboutImg from '../../../images/about.jpg';
import './AboutUs.css';

const AboutUs = () => {

    return (
        <div className='m-5 m-sm-3 py-3 border-0 rounded about'>
            <h1 className="text-dark rounded-pill text-center fw-bold">About Us</h1>
            <div className="row p-md-5">
                <div className="col-md-6 about-text p-lg-5 p-md-4">
                    <div className="">

                        <h4 className='text-dark text-center'>The World Best Dental Specialist Treatment</h4>
                        <p className='text-Justify text-center pe-3 me-3'>We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.</p>
                    </div>
                    <div className="pt-3 text-center">
                        <h4>Clneasing</h4>
                        <ProgressBar variant="primary" animated now={67} />
                        <h4>Crown & Bridges</h4>
                        <ProgressBar variant="secondary" animated now={95} />
                        <h4>Root Canal</h4>
                        <ProgressBar variant="warning" animated now={80} />
                        <h4>Cosmetic Dentistry</h4>
                        <ProgressBar variant="primary" animated now={79} />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="about-img my-3">
                        <img className='w-75 img-fluid rounded' src={aboutImg} alt="" />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AboutUs;