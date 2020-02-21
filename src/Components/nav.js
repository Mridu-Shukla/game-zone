import React from 'react';
import { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

class Navv extends Component{
    render(){
        return(
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
  <Navbar.Brand href="/" style={{fontFamily: 'cursive'}}>Game Zone</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav>
    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
    </Nav>
    <Nav>
    <Nav.Item><Nav.Link href="#">About</Nav.Link></Nav.Item>
    </Nav>
    
    
  </Navbar.Collapse>
  </Container>
</Navbar>
          
            
        );
    }
}

export default Navv;