import React, {useContext, useEffect, useState} from 'react';
import {Container, Dropdown, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Catalog = observer(() => {
    const {device} = useContext(Context)
    const [ordersprice, setOrderPrice] = useState('DESC')
    
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        // fetchDevices(null, null, 1, 5).then(data => {
        //     device.setDevices(data.rows),
        //     device.setTotalCount(data.count)
        // })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 5, ordersprice).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand, ordersprice])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    {/* Сортировка */}
                    <Form>
                        <Dropdown className="float-right p-2">
                            <Dropdown.Toggle>Сортировка</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={e => setOrderPrice('ASC')}>По возрастанию</Dropdown.Item>
                                <Dropdown.Item onClick={e => setOrderPrice('DESC')}>По убыванию</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Form>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Catalog;