import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, Col, Button, Image, Stack, NavDropdown, Form, Carousel, Card, NavLink } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import "../styles/Home.css";
import 'accessibility-buttons/dist/css/accessibility-buttons.css';
import 'accessibility-buttons/dist/js/accessibility-buttons.js';

class Home extends Component {
   render() {
      return (
         <div>
            <Navbar expand="lg" className="bg-body-tertiary">
               <Container fluid className='px-1 px-md-5 py-md-2' style={{ backgroundColor: '#FFFFFF' }}>
                  <Navbar.Brand href="#home"><h1>Marketplace.</h1></Navbar.Brand>
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
                           <Image src='Images/user.png' alt="Moje Konto" className="menu_ikona" />
                           Moje Konto
                        </NavLink>
                        <Nav.Link href="#Cart" className="navbar_icon text-dark">
                           <Image src='Images/cart.png' alt="Koszyk" className="menu_ikona" />
                           Koszyk
                        </Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary text-center">
               <Container fluid className='d-flex px-5 text-center flex-column justify-align-center align-items-center' style={{ backgroundColor: '#FFFFFF' }}>
                  <Navbar.Brand href="#home"><h2>Kategorie</h2></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-warning" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="me-auto">
                        <NavDropdown title="Elektronika" className='logo' id="collapsible-nav-dropdown">
                           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.2">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Moda" className='logo' id="collapsible-nav-dropdown">
                           <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.5">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.6">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dom i Ogród" className='logo' id="collapsible-nav-dropdown">
                           <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.5">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.6">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Biżuteria i Uroda" className='logo' id="collapsible-nav-dropdown">
                           <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.5">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.6">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Książki, Flmy i Muzyka" className='logo' id="collapsible-nav-dropdown">
                           <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.5">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.6">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sport i Podróże" className='logo' id="collapsible-nav-dropdown">
                           <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.5">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.6">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Motoryzacja" className='logo' id="collapsible-nav-dropdown">
                           <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.5">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.6">Something</NavDropdown.Item>
                        </NavDropdown>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
            <Container>
               <Row>
                  <Col>
                     <Carousel interval={null}>
                        <Carousel.Item>
                           <img src="Images/karuzela1.jpg" class="d-block w-100 obraz_karuzela" text="First slide" alt="Niebieskie buty" />
                           <Carousel.Caption className="karuzela_text">
                              <span className='tekstkaruzeli'><h3>Platforma dostępna dla każdego</h3>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </span>
                           </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img src="Images/karuzela2.jpg" class="d-block w-100 obraz_karuzela" text="Second slide" alt="Kolorowe gitary" />
                           <Carousel.Caption className="karuzela_text">
                              <h3>Platforma dostępna dla każdego</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                           <img src="Images/karuzela3.jpg" class="d-block w-100 obraz_karuzela" text="Third slide" alt="Biały smartphone Samsung" />
                           <Carousel.Caption className="karuzela_text">
                              <h3>Platforma dostępna dla każdego</h3>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                           </Carousel.Caption>
                        </Carousel.Item>
                     </Carousel>
                  </Col>
               </Row>
            </Container>
            <Container fluid className='m-4 d-flex flex-column'>
               <h3 className="mt-4 mb-5 d-flex justify-content-center">
                  Popularne na Marketplace.
               </h3>
               <Row xs={1} md={2} className="d-flex justify-content-center">
                  <Card className="text-center m-1" style={{ width: '18rem' }}>
                     <Card.Img variant="top" src="Images/sneakersy.jpg" alt="Buty Nike oparte o ścianę" />
                     <Card.Body className='karta'>
                        <Card.Title>Sneakersy</Card.Title>
                        <Button href="/sneakers" variant="warning">Zobacz więcej</Button>
                     </Card.Body>
                  </Card>
                  <Card className="text-center m-1" style={{ width: '18rem' }}>
                     <Card.Img variant="top" src="Images/produkty_luksusowe.jpg" alt="Brązowa torebka" />
                     <Card.Body className='karta'>
                        <Card.Title>Produkty Luksusowe</Card.Title>
                        <Button variant="warning">Zobacz więcej</Button>
                     </Card.Body>
                  </Card>
                  <Card className="text-center m-1" style={{ width: '18rem' }}>
                     <Card.Img variant="top" src="Images/zabawki.jpg" alt="Zółty samochód strażacki dla dzieci" />
                     <Card.Body className='karta'>
                        <Card.Title>Zabawki</Card.Title>
                        <Button variant="warning">Zobacz więcej</Button>
                     </Card.Body>
                  </Card>
                  <Card className="text-center m-1" style={{ width: '18rem' }}>
                     <Card.Img variant="top" src="Images/części_samochodowe.jpg" alt="Felgi samochodowe" />
                     <Card.Body className='karta'>
                        <Card.Title>Części samochodowe
                        </Card.Title>
                        <Button variant="warning">Zobacz więcej</Button>
                     </Card.Body>
                  </Card>
               </Row>

            </Container>
            <Container>
               <Row>
                  <Col sm={4} className='text-start text_background_section d-flex flex-column justify-content-center'>
                     <h3>Platforma dostępna dla każdego</h3>
                     <Button variant="warning">Sprawdź kategorie</Button>
                  </Col>
                  <Col sm={8} className='background_section'>
                     <Image src='Images/krzesło.jpg' alt="Zielone krzesło" className='background_picture' />
                  </Col>
               </Row>
            </Container>
            <Container className='bg-white anchor'>
               <Row className='p-auto py-5 p-sm-5'>
                  <Col className='d-flex flex-column justify-content-center'>
                     <h4><span class="me-1"><Image src="Images/envelope-outline.svg" alt="Image" class="img-fluid" /></span><span>Zapisz się do Newslettera</span></h4>
                     <Form className='d-flex'>
                        <Form.Control placeholder='Wpisz swoje imię' className='me-4' />
                        <Form.Control placeholder='Podaj swój email' className='me-4' />
                        <Button variant="warning rounded-pill" className="btn zapisz">Zapisz się</Button>
                     </Form>
                  </Col>
                  <Col className='d-flex flex-column justify-align-center align-items-end d-none d-md-block'>
                     <Image src='Images/sofa.png' alt="Turkusowy fotel" fluid style={{ width: '400px', height: 'auto' }} />
                  </Col>
               </Row>
               <Row className='border-bottom p-auto p-sm-5'>
                  <Col lg={4} className='pb-5'>
                     <h4>Dodatkowe Informacje</h4>
                     <p className='w-75'>Lorem ipsum dolor sit amet. Vel natus corporis qui dolor delectus id doloribus rerum ea quam maxime qui veritatis tempora sed facere laborum quo quod minus?</p>
                  </Col>
                  <Col>
                     <ul className='list-unstyled'>
                        <li><a href='/'>O nas</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Skontaktuj się</a></li>
                     </ul>
                  </Col>
                  <Col>
                     <ul className='list-unstyled'>
                        <li><a href='/'>Support</a></li>
                        <li><a href='/'>Wiedza</a></li>
                        <li><a href='/'>Czat</a></li>
                     </ul>
                  </Col>
                  <Col>
                     <ul className='list-unstyled'>
                        <li><a href='/'>Kariera</a></li>
                        <li><a href='/'>Zespół</a></li>
                        <li><a href='/'>Polityka prywatności</a></li>
                     </ul>
                  </Col>
                  <Col>
                     <ul className='list-unstyled'>
                        <li><a href='/'>Dostawa & Zwroty</a></li>
                        <li><a href='/'>Regulamin</a></li>
                        <li><a href='/'>Media</a></li>
                     </ul>
                  </Col>
               </Row>
            </Container>
            <Container className="footer">
               <Row className='p-auto p-sm-5 stopka '>
                  <Col md>
                     <p>Copyright ©2024. All Rights Reserved.</p>
                  </Col>
                  <Col md className='d-flex justify-content-end align-items-center'>
                     <Stack direction='horizontal' gap={4}>
                        <a href='/'>Regulamin</a>
                        <a href='/'>Polityka prywatności</a>
                     </Stack>
                  </Col> 
               </Row>
            </Container>
         </div>
      )
   }
}

export default Home