import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'


export default class Contact extends Component {
    render() {
        return (
            <Container style={{ width: '500px'}}>
                <h1 className="text-center">Обратная связь</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>
                        Мы никогда никому не передадим вашу электронную почту
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Текст</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Согласие на обработку данных мусорами"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >Отправиться в космос</Button>

                </Form>
            </Container>
        )
    }
}