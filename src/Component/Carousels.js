import React from 'react';
import { Container, Row, Col, Carousel, CardDeck } from 'react-bootstrap';
import CardData from "./CardData";
import DummyCard from './DummyCard';

const Carousels = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-primary ">PREMIUM SUPPLIERS</h2>
                        <hr style={{marginTop:"2px"}}/>
                     
                        {/* First Carousel Item */}
                        <Carousel>
                            <Carousel.Item>
                                <Container>
                                    <Row>

                                        {
                                            // Array.map method to show cards images one by one

                                            CardData.map((val, ind) => {
                                                return (

                                                    <DummyCard
                                                        imgsrc={val.imgsrc}
                                                        title={val.title}
                                                        text={val.text}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Container>

                            </Carousel.Item>

                            {/* SEcond Carousel Item */}
                            <Carousel.Item>
                                <Container>
                                    <Row>

                                        {
                                            // Array.map method to show cards images one by one

                                            CardData.map((val, ind) => {
                                                return (

                                                    <DummyCard
                                                        imgsrc={val.imgsrc}
                                                        title={val.title}
                                                        text={val.text}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Container>

                            </Carousel.Item>

                            {/* Third Carousel Item */}
                            <Carousel.Item>
                                <Container>
                                    <Row>

                                        {
                                            // Array.map method to show cards images one by one

                                            CardData.map((val, ind) => {
                                                return (

                                                    <DummyCard
                                                        imgsrc={val.imgsrc}
                                                        title={val.title}
                                                        text={val.text}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Container>

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Carousels;
