import React from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const { doctors } = useData();

    const detail = doctors.find(doctor => doctor.id == doctorId);
    return (
        <div>
            <div className="container my-5 text-left">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="text-primary fs-1 fw-bold">{detail?.title}</h2>
                        <h6 className="text-dark fs-3">{detail?.specialist}</h6>
                        <p>{detail?.desc}</p>

                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="secondary">Go Home</Button>
                        </Link>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-4 ">
                        <img className="rounded" width="70%" src={detail?.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetail;