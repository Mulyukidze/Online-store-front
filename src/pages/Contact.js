import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import axios from "axios";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            text: ''
        };
      }
    emailtostate(e){
        this.setState.state.email = e.target.value
    }
    texttostate(e){
        this.setState.text = e.target.value
    }
    clickbutton(e){
        let text = this.state.text
        let email = this.state.email
        axios.post('http://localhost:5000/api/contacts', {
        email: email,
        text: text
        }).then(r => console.log(r)).catch(err => err)
        e.preventDefault()
        alert('Письмо отправлено!')
        document.location.href="http://localhost:3000/"
    }
    render() {
        return (
            <Container style={{ width: '500px'}}>
                <h1 className="text-center">Обратная связь</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Введите Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onInput={(e) => this.emailtostate(e)}/>
                        <Form.Text>
                        Мы никогда никому не передадим вашу электронную почту!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Введите текст</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Текст" onInput={e => this.texttostate(e)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Согласие на обработку данных"/>
                    </Form.Group>
                    <Button  onClick={event => this.clickbutton(event)}
                    variant="primary" 
                    type="submit" >Отправить
                    </Button>
                </Form>
            </Container>
        )
    }
}