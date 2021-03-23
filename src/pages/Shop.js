import React, { Component } from 'react';
import Slider from '../components/Slider';
import Carousel from 'react-bootstrap/Carousel';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import pervoeImg from '../assets/XR.jpg'
import vtoroeImg from '../assets/11.jpg'
import tretieImg from '../assets/12.jpg'

function visitCatalog(){
    window.location='http://localhost:3000/catalog';
}

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
                    <Card bg="success" border="info">
                            <Card.Img 
                                variant="top"
                                src={ pervoeImg }
                            />
                            <Card.Body>
                                <Card.Title>Apple iPhone XR - 64Gb Red (Красный)</Card.Title>
                                <Card.Text>
                                    Цена: 44690 ₽
                                </Card.Text>
                                <Button onClick={visitCatalog} variant="primary">В магазин!</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="success" border="info">
                            <Card.Img 
                                variant="top"
                                src={ vtoroeImg }
                            />
                            <Card.Body>
                                <Card.Title>Apple iPhone 11 - 256Gb Black (Черный)</Card.Title>
                                <Card.Text>
                                    Цена: 68990 ₽
                                </Card.Text>
                                <Button onClick={visitCatalog} variant="primary">В магазин!</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="success" border="info">
                            <Card.Img 
                                variant="top"
                                src={ tretieImg }
                            />
                            <Card.Body>
                                <Card.Title>Apple iPhone 12 - 128Gb White (Белый)</Card.Title>
                                <Card.Text>
                                    Цена: 73890 ₽
                                </Card.Text>
                                <Button onClick={visitCatalog} variant="primary">В магазин!</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}