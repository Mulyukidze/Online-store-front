import React, { Component } from 'react';
import Slider from '../components/Slider';
import Carousel from 'react-bootstrap/Carousel';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import pervoeImg from '../assets/maxresdefault.jpg'
import vtoroeImg from '../assets/strike.jpg'

export default class Shop extends Component {
    render() {
        return (
            <>
                <Slider />
                <Container>
                    <h2 className="text-center m-4" style={{textAlign: "center", margin: "0px", paddingBottom: "30px", fontSize: "36px", color: "#747577", lineHeight: "30px"}}>
                        Бренд одежды, вдохновлённый этим безумным миром и девичьей силой. Сшито и напечатано вручную.
                    </h2>
                    <h2 className="text-center m-4" style={{textAlign: "center", margin: "0px", paddingBottom: "30px", fontSize: "16px", color: "#747577", lineHeight: "29px"}}>
                        Привет! Мы - Андрей и Таня, основатели и дизайнеры проекта Romanticana. Мы любим создавать красивые вещи, заряженные особенным настроением и 
                        индивидуальностью. Нам нравится удивлять, привнося в этот мир что-то необыкновенное.
                    </h2>
                    <CardDeck className="m-4">
                        <Card bg="warning" border="success" text="primary">
                            <Card.Img
                                variant="top"
                                src={ pervoeImg }
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="success" border="info">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img 
                                variant="bottom"
                                src={ vtoroeImg }
                            />
                        </Card>
                        <Card bg="info" border="warning">
                            <Card.Img 
                                variant="top"
                                src={ pervoeImg }
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <CardDeck className="m-4">
                        <Card bg="warning" border="success" text="primary">
                            <Card.Img
                                variant="top"
                                src={ pervoeImg }
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="success" border="info">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img 
                                variant="bottom"
                                src={ vtoroeImg }
                            />
                        </Card>
                        <Card bg="info" border="warning">
                            <Card.Img 
                                variant="top"
                                src={ pervoeImg }
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}