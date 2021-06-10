import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, INFO, CONTACT, BASKET_ROUTE, CATALOG_ROUTE} from "../utils/consts";
import {Button, Form, FormControl} from "react-bootstrap";
import logo from '../assets/logo.png';
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import {removeToken} from "../http/userAPI";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    //Button exit
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        removeToken()
    }

    return (
        <Navbar expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" >
                    <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <NavLink className="m-sm-3" style={{color:'white'}} to={CATALOG_ROUTE}>Магазин</NavLink>
                <NavLink className="m-sm-3" style={{color:'white'}} to={INFO}>О нас</NavLink>
                <NavLink className="m-sm-3" style={{color:'white'}} to={CONTACT}>Обратная связь</NavLink>
                <NavLink className="m-sm-3" style={{color:'white'}} to={BASKET_ROUTE}>Корзина</NavLink>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button
                        variant="outline-info"
                        onClick={e => searchDevice}
                    >Search
                    </Button>
                </Form>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-info"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-info"} onClick={() => logOut()} className="ml-2">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-info"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;