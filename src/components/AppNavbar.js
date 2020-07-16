import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

import cruebee from '../assets/cruebee.svg';
import './componentStyles/appNavbar.css';

export default class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Navbar.Brand className="logo-temp" href="#">
          <img className="cruebee-logo" src={cruebee} alt="cruebee logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto logo-temp">
            <Nav.Link href="#pageTop">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contactMe">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
