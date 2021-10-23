
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FooterLogo from "../../../images/logo_footer.png";
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-primary">
            <div className="container p-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4 pt-2">
                    <div className=" mx-auto d-block ">
                        <NavLink as={Link} to="/" >
                            <img
                                src={FooterLogo}
                                width="160"
                                height="60"
                                className="d-inline-block pt-0 mt-0"
                                alt=""

                            />
                        </NavLink>
                        <p className="text-opacity-50 text-light"><small>A team of dentists working to ensure you receive the best treatment.</small></p>
                        <p className="text-opacity-50 text-light"><small>© DentiCare - 2021 || All rights reserved</small></p>
                    </div>
                    <div className="text-left text-light mt-3 ">
                        <small className="text-left fw-bold text-dark fs-4">About Us</small><br />
                        <small className="m-0">Our Dental Team</small><br />
                        <small className="m-0">Pricing & Pricelist</small><br />
                        <small className="m-0">Solutions</small><br />
                        <small className="m-0">Dental Services</small><br />
                    </div>
                    <div className="text-light mt-3">
                        <small className="text-left fw-bold text-dark fs-4">Our Awards</small><br />
                        <small className="m-0">DentiCare is a multiple award winner</small><br />
                        <small className="m-0">Best Patient Care <b>2017</b></small><br />
                        <small className="m-0">Best Practice & Team <b>2016</b></small><br />
                        <small className="m-0">Best Patient Care <b>2014</b></small><br />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;