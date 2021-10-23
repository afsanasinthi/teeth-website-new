import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from "react-icons/bi";
import './Service.css';
import { Button } from '@mui/material';


const Service = ({ service }) => {
    const { id, title, desc, image } = service;
    return (
        <div>
            <Card className=" m-4 service border-0" >
                <Card.Img variant="top" className="img rounded" src={image} />
                <Card.Body className="p-4">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 75)}..
                    </Card.Text>
                    <Link to={`/serviceDetail/${id}`} style={{ textDecoration: 'none' }}>
                        {/* <Button variant="secondary" className="fw-normal rounded-pill px-3">Learn More <BiRightArrowAlt /></Button> */}
                        <Button variant="outlined" color="primary">Learn More <BiRightArrowAlt /></Button>
                    </Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Service;