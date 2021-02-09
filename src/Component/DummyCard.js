import React from 'react';
import { Col, Container, Row, Carousel, Card, CardDeck, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DummyCard.css";

const DummyCard = (props) => {
  return (
    <>


      {/* First Card */}
      <Col lg={4} md={6} sm={12} style={{ marginBottom: "1.2rem" }}>
        <Card className="card_style mx-auto shadow  w-90 h-100 ">
          <Card.Img variant="top" src={props.imgsrc} className="card-img-top card_img img-fluid" />
          <Card.Body className="">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text >
              {props.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>


    </>
  )
}

export default DummyCard;
