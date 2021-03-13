import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'
import pervoeImg from '../assets/0f33ad8c00ae3f05b8ec82825.jpg'
import vtoroeImg from '../assets/4803721321312.jpg'

export default class Info extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                     <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={ pervoeImg } alt=""></img>
                                    <p>
                                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
                                        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
                                        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, 
                                        но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация 
                                        листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки 
                                        типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={ vtoroeImg } alt=""></img>
                                    <p>
                                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
                                        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
                                        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, 
                                        но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация 
                                        листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки 
                                        типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={ pervoeImg } alt=""></img>
                                    <p>
                                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
                                        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
                                        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, 
                                        но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация 
                                        листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки 
                                        типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    };
};