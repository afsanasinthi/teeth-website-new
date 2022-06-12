import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FiLogOut } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="primary" className='nav py-2' sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><NavLink as={Link}
                        to="/"
                    >
                        <img
                            src={logo}
                            width="160"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink as={Link}
                                to="/services"
                                style={{ textDecoration: "none", color: "primary", padding: "5px" }}
                                activeStyle={{
                                    fontWeight: "bolder",
                                    color: "primary",
                                }}
                            >Services
                            </NavLink>
                            <NavLink as={Link}
                                className=""
                                to="/about"
                                style={{ textDecoration: "none", color: "primary", padding: "5px" }}
                                activeStyle={{
                                    fontWeight: "bolder",
                                    color: "primary",
                                }}
                            >
                                About Us
                            </NavLink>
                            <NavLink as={Link}
                                className=""
                                to="/appoinment"
                                style={{ textDecoration: "none", color: "primary", padding: "5px" }}
                                activeStyle={{
                                    fontWeight: "bolder",
                                    color: "primary",
                                }}
                            >
                                Appoinment
                            </NavLink>
                        </Nav>
                        <Nav>
                            {
                                user.email ?
                                    <Button onClick={logOut} variant="primary" className="  rounded-pill px-3 fw-bolder">Sign Out <FiLogOut /></Button>
                                    :
                                    <Link to="/login">
                                        <Button variant="warning" className="mx-2 rounded-pill px-3 fw-bolder">Sign In <FaSignInAlt /></Button>
                                    </Link>
                            }

                            {
                                user?.email && user?.photoURL ? <img width="40px" className="rounded-circle ms-3 user" src={user.photoURL} alt="" /> : <span className="displayName">{user.displayName}</span>
                            }
                            {/* <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;