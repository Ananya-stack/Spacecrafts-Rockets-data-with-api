import React from 'react';
import './Header.css'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='navbars'>
        <Navbar variant="dark" >
                                    <Container>
                                        <Navbar.Brand href="/" >Satellite</Navbar.Brand>
                                        <Nav className="mr-auto">
                                        <Nav.Link as={Link} to="/" className='navbrands active nav-content'>Home</Nav.Link>
                                            <Nav.Link as={Link} to="/space" className='navbrands active nav-content'>spacecrafts</Nav.Link>
                                            <Nav.Link as={Link} to="/launchers" className='navbrands active nav-content'>launchers</Nav.Link>
                                            <Nav.Link as={Link} to="/customer" className='navbrands active nav-content'>Customer Satellites</Nav.Link>
                                            <Nav.Link as={Link} to="/center" className='navbrands active nav-content'>Centres</Nav.Link>
                                        </Nav>
                                    </Container>
            </Navbar>
            <h3 className='heading'>ISRO🚀</h3>
        </div>
    );
}

export default Header;
