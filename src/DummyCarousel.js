import React from 'react';
import { Col, Container, Row,Carousel,Card, CardDeck, CardColumns } from 'react-bootstrap';
import Exotic from "./Images/Exotic.jpg";
import "./DummyCarousel.css";
const DummyCarousel = () => {
    return (
        <>
           <Container>
            <Row >
                <Col style={{marginTop:"35px"}}>
                  <h2 className="text-primary">PREMIUM SUPPLIERS</h2>
                  <hr> 
       
                  <Carousel>
                      {/* First Carousel Item */}
  <Carousel.Item>
    <CardDeck>

        {/* First Card */}
      <Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
        {/* Second Card */}
     <Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto  shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
 
    
    {/* Third Card */}
   
    <Col lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto   shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body >
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
   {/* Fourth CARD */}
  <Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto  shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
{/* Fifth Card */}
  <Col lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto  shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
{/* Sixth Card */}
  <Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary"  className="card_style mx-auto  shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
       </CardDeck>
  </Carousel.Item>
  
  {/* Second Carousel Item */}
  <Carousel.Item>
  <CardDeck>

{/* First Card */}
<Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
<Card border="primary" className="card_style mx-auto  shadow">
<Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
<Card.Body className="">
<Card.Title>EXOTIC SOURCING SARL</Card.Title>
<Card.Text >
Our company is able to supply high quality product from west Africa.
All our product is an issue..
</Card.Text>
</Card.Body>
</Card>
</Col>
{/* Second Card */}
<Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
<Card border="primary" className="card_style mx-auto  shadow">
<Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
<Card.Body className="">
<Card.Title>EXOTIC SOURCING SARL</Card.Title>
<Card.Text >
Our company is able to supply high quality product from west Africa.
All our product is an issue..
</Card.Text>
</Card.Body>
</Card>
</Col>


{/* Third Card */}

<Col lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
<Card border="primary" className="card_style mx-auto  shadow">
<Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
<Card.Body >
<Card.Title>EXOTIC SOURCING SARL</Card.Title>
<Card.Text >
Our company is able to supply high quality product from west Africa.
All our product is an issue..
</Card.Text>
</Card.Body>
</Card>
</Col>
{/* Fourth CARD */}
<Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
<Card border="primary" className="card_style mx-auto  shadow">
<Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
<Card.Body className="">
<Card.Title>EXOTIC SOURCING SARL</Card.Title>
<Card.Text >
Our company is able to supply high quality product from west Africa.
All our product is an issue..
</Card.Text>
</Card.Body>
</Card>
</Col>
{/* Fifth Card */}
<Col lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
<Card border="primary" className="card_style mx-auto  shadow">
<Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
<Card.Body className="">
<Card.Title>EXOTIC SOURCING SARL</Card.Title>
<Card.Text >
Our company is able to supply high quality product from west Africa.
All our product is an issue..
</Card.Text>
</Card.Body>
</Card>
</Col>
{/* Sixth Card */}
<Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
<Card border="primary"  className="card_style mx-auto  shadow">
<Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
<Card.Body className="">
<Card.Title>EXOTIC SOURCING SARL</Card.Title>
<Card.Text >
Our company is able to supply high quality product from west Africa.
All our product is an issue..
</Card.Text>
</Card.Body>
</Card>
</Col>
</CardDeck>
  </Carousel.Item>
 
  {/* Third Carousel */}
  
  <Carousel.Item>
    <CardDeck>

        {/* First Card */}
      <Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto  shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
        {/* Second Card */}
     <Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto  shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
 
    
    {/* Third Card */}
   
    <Col lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto   shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body >
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
   {/* Fourth CARD */}
  <Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto  shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
{/* Fifth Card */}
  <Col lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary" className="card_style mx-auto  shadow" >
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
{/* Sixth Card */}
  <Col  lg={4} md={6}  sm={12} style={{ marginBottom: "1.2rem" }}>
      <Card border="primary"  className="card_style mx-auto  shadow">
    <Card.Img variant="top" src={Exotic} className="card-img-top card_img"  />
    <Card.Body className="">
    <Card.Title>EXOTIC SOURCING SARL</Card.Title>
      <Card.Text >
      Our company is able to supply high quality product from west Africa.
    All our product is an issue..
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
       </CardDeck>
  </Carousel.Item>
  </Carousel>
              </Col>  
             </Row>
             </Container>
        </>
    )
};

export default DummyCarousel;
