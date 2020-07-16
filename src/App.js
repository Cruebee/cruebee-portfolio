import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';

export default class App extends React.Component {
  render() {
    return (
      <main id="pageTop" className="App">
        <Container>
          <Row className="App-header">
            <nav className="navigation-container">
              <AppNavbar />
            </nav>
          </Row>
        </Container>
        <Container className="home-component">
          <Row>
            <Home />
          </Row>
        </Container>
        <section>
          <div id="aboutMe">
            <AboutMe />
          </div>
        </section>
        <div id="projects">
          <Projects />
        </div>
        <div id="contactMe">
          <ContactMe />
        </div>
        <Container className="page-footer">
          <Row>
            <AppFooter />
          </Row>
        </Container>
      </main>
    );
  }
}
