import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Appoinment.css'

const Appoinment = () => {
    return (
        <div className="appoinment-div">
            <Grid container spacing={8} columns={12}>

                <Grid item xs={8}
                    flexDirection md={12} xs={12}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="strech"
                >
                    <Card sx={{ maxWidth: 600, minWidth: 400 }}>
                        <CardActionArea>
                            <CardContent className="align-items-center">
                                <Typography gutterBottom variant="h4" component="div" className="fw-light text-dark">
                                    Book Your Visit At <b className="fw-bold fs-1 text-primary">DentiCare</b>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually reintermediate integrated processes through technically sound intellectual capital.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={8} md={4}
                    flexDirection md={12} xs={12}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                            label="First Name" variant="standard" color="info" focused
                        />
                        <TextField
                            label="Last Name" variant="standard" color="info" focused
                        />
                        <TextField
                            label="Email" variant="standard" color="info" focused
                        />
                        <Button variant="contained" color="info">Submit</Button>
                    </Box>
                </Grid>
            </Grid>
        </div >
    );
};

export default Appoinment;