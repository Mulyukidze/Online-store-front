import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pervoeImg from '../assets/3f95e9c0-53fe-11eb-8a62-f5f2e076f6e1_m.jpeg'
import vtoroeImg from '../assets/4a237b50-53fe-11eb-8a62-f5f2e076f6e1_m.jpeg'
import tretieImg from '../assets/433d1fd0-53fe-11eb-8a62-f5f2e076f6e1_m.jpeg'
import chetvertoeImg from '../assets/37097f60-53fe-11eb-8a62-f5f2e076f6e1_m.jpeg'
import pyatoeImg from '../assets/47091bf0-53fe-11eb-8a62-f5f2e076f6e1_m.jpeg'

export default class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ pervoeImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ispum dolor, sit amet consectetur adispisicing elit, quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ vtoroeImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ispum dolor, sit amet consectetur adispisicing elit, quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ tretieImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ispum dolor, sit amet consectetur adispisicing elit, quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ chetvertoeImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ispum dolor, sit amet consectetur adispisicing elit, quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ pyatoeImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ispum dolor, sit amet consectetur adispisicing elit, quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}