import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import img from '../../../images/two.jpg'
import { Button, Card, Col } from 'react-bootstrap';
const Review = ({ bar }) => {
    return (
        <>
        <Col md={4} className="p-3">
            <Card className="p-5">
                <Card.Img variant="top" src={bar.img} />
                <Card.Body className="text-center">
                    <Card.Title className="font-weight-bold">{bar.name}</Card.Title>
                    <h5>{bar.title}</h5>
                    <Button className="btnStyle" variant="dark">Hire Now<FontAwesomeIcon className="ml-2" icon={faFingerprint} /></Button>
                </Card.Body>
            </Card>
        </Col>
    </>
    );
};

export default Review;