import "./ContactStyles.css";
import { useState } from "react";
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contact from "../assets/contact-img.svg";

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    return (
        <div className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start">
                        <img src={contact} alt="Contact" className="img-fluid rounded" />
                    </Col>
                    <Col md={6} className="right">
                        <h2>Get In Touch</h2>
                        <form 
                            action="https://formsubmit.co/your-email@example.com" 
                            method="POST" 
                            className="form"
                        >
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://your-portfolio.netlify.app/thank-you" />

                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formDetails.phone}
                                        placeholder="Phone No."
                                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        name="message"
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary mt-3">
                                        <span>Send</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
