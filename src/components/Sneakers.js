import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import "../styles/Sneakers.css";


import { Navbar, Container, Nav, Col, Button, Image, Stack, NavDropdown, Form, Card, NavLink } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'accessibility-buttons/dist/css/accessibility-buttons.css';
import 'accessibility-buttons/dist/js/accessibility-buttons.js';




class Sneakers extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid className='px-1 px-md-5 py-md-2' style={{ backgroundColor: '#FFFFFF' }}>
                        <Navbar.Brand href="/"><h1>Marketplace.</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-warning" />
                        <Navbar.Collapse id="basic-navbar-nav" className="navbar_item" >
                            <Nav className="ms-auto header_section" gap={5}>
                                <Form className="d-flex mx-3">
                                    <Form.Control
                                        type="search"
                                        placeholder="Wyszukaj coś"
                                        className="me-2 search_section"
                                        aria-label="Search"
                                    />
                                    <Button variant="warning rounded-pill" class="btn">Szukaj</Button>
                                </Form>
                                <NavLink href="/signup" className="navbar_icon text-dark">
                                    <Image src='images/user.png' alt="Moje Konto" className="menu_ikona" />
                                    Moje Konto
                                </NavLink>
                                <Nav.Link href="#Cart" className="navbar_icon text-dark">
                                    <Image src='images/cart.png' alt="Koszyk" className="menu_ikona" />
                                    Koszyk
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/sneakers">
                                    Sneakersy
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className='text_column' >
                            <h2>
                                Wejdź na szczyt w sneakersach
                            </h2>
                            <h3>
                                Kupuj marki, które wyznaczają trendy
                            </h3>
                        </Col>
                        <Col className='image_column'><Image src="images/basketball_sneakers.jpg" alt="Fioletowo-różowe buty sportowe i piłka do koszykówki" className='image_top' /></Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="row_section">
                        <Col xs={5} sm={4} md={2} className='sidebar'>
                            <Nav defaultActiveKey="/home" >
                                <h4>Kategorie</h4>
                            </Nav>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Dla kobiet</li>
                                <li class="list-group-item">Dla mężczyzn</li>
                                <li class="list-group-item">Dla dzieci</li>
                                <li class="list-group-item">Akcesoria</li>
                            </ul>
                        </Col>
                        <Col xs={7} sm={8} md={10}>
                            <Row xs={1} md={2} lg={3} >
                                {Array.from({ length: 6 }).map((_, idx) => (
                                    <Col key={idx}>
                                        <Card className="karta_produktu">
                                            <Card.Img variant="top" alt="But Nike Model Air Max" src="images/nike_air_max.jpg" />
                                            <Card.Body>
                                                <Card.Title>NIKE</Card.Title>
                                                <Card.Text>
                                                    Air Max
                                                </Card.Text>
                                                <Card.Text className='price'>
                                                    $100
                                                </Card.Text>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-half"></i>
                                                <Card.Text className='delivery'>
                                                    Zamów do 18:00 dostawa jutro
                                                </Card.Text>
                                            </Card.Body>
                                            <Button variant="warning">Dodaj do koszyka</Button>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                    </Row>
                </Container>




            </div>
        )
    }
}

export default Sneakers