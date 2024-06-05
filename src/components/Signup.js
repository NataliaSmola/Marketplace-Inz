import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, Col, Button, Image, Stack, NavDropdown, Form, Carousel, Card, NavLink } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import "../styles/Signup.css";

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid className='px-1 px-md-5 py-md-2' style={{ backgroundColor: '#FFFFFF' }}>
                        <Navbar.Brand href="/"><h1>Marketplace.</h1></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Masz już konto? <a href="#login">Zaloguj się</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <Row>
                        <Col className='konto_grafika' title="Gromadka dzieci" aria-label="gromadka dzieci"></Col>
                        <Col className='create_account d-flex justify=content-center flex-column align=items=center'>
                            <h2 className='title'>Utwórz konto</h2>
                            <Form className='d-flex justify-content-center flex-column' >
                                <Row className='d-flex flex-column' >
                                    <Col>
                                        <Form.Control placeholder="Imię" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Nazwisko" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="email" placeholder="Adres e-mail" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="password" placeholder="Hasło" />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <Button type="submit" variant="warning rounded-pill" class="btn">Utwórz konto</Button>
                                <Row className='d-flex justify-content-center flex-column'>
                                    <Col className='d-flex justify-content-center'>
                                        <h6>lub kontynuuj z</h6>
                                    </Col>
                                    <Col className='d-flex justify-content-center'>
                                        <Button variant="secondary" class="btn"><i class="bi bi-google"></i> Google</Button>
                                        <Button variant="secondary" class="btn"><i class="bi bi-facebook"></i> Facebook</Button>
                                        <Button variant="secondary" class="btn"><i class="bi bi-apple"></i> Apple</Button>
                                    </Col>
                                </Row>











                            </Form>
                        </Col>
                    </Row>
                </Container>




            </div>
        )
    }
}

export default Signup